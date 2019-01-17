'use strict';

const mqtt = require('mqtt');
const pyatv = require('@sebbo2002/node-pyatv');

const keys = [
    'up',
    'right',
    'down',
    'left',
    'menu',
    'next',
    'pause',
    'play',
    'previous',
    'stop',
    'topMenu',
    'select'
];

/**
 * @author Sebastian Pekarek
 * @module @sebbo2002/pyatv-mqtt-bridge
 * @class PyAtvMqttBridge
 */
class PyAtvMqttBridge {
    constructor(options) {
        if (typeof options.broker !== 'string') {
            throw new Error('options.broker is not set!');
        }
        if (!Array.isArray(options.devices) || !options.devices.length) {
            throw new Error('options.devices is not set!');
        }
        if (options.devices.find(d => typeof d.topic !== 'string')) {
            throw new Error('options.devices.topic is not set!');
        }
        if (options.devices.find(d => typeof d.address !== 'string')) {
            throw new Error('options.devices.address is not set!');
        }
        if (options.devices.find(d => typeof d.loginId !== 'string')) {
            throw new Error('options.devices.loginId is not set!');
        }

        this._options = options;
        this._teardown = [];

        this
            ._start()
            .catch(err => {
                this._log('error', null, 'Unable to start bridge', err);
            });
    }

    _log(level, address, message, error) {
        if (this._options.log) {
            try {
                this._options.log.apply(this, [level, address, message, error]);
            } catch (err) {
                console.log('Unable to call custom log function:');
                console.log(err);
            }
        }
    }

    async _start() {
        this._mqtt = mqtt.connect(this._options.broker);
        this._mqtt.on('error', error => this._log('error', null, null, error));
        this._teardown.unshift(() => {
            this._mqtt.off('error');
            return new Promise(resolve => {
                this._mqtt.end(false, () => {
                    resolve();
                });
            });
        });

        await Promise.all(
            this._options.devices.map(
                device => this._startDevice(device)
            )
        );
    }

    async _startDevice(device) {
        this._log('info', device.address, 'Setup device...');

        const atv = pyatv.connect(device.address, device.loginId, {
            debug: true,
            log: msg => {
                this._log('info', device.address, msg);
            }
        });


        /* MQTT <--  PYATV */

        this._mqtt.publish(device.topic + '/address', device.address, {retain: true});
        this._mqtt.publish(device.topic + '/loginId', device.loginId, {retain: true});

        atv.deviceId().then(deviceId => this._mqtt.publish(device.topic + '/deviceId', deviceId, {retain: true}));

        let push, shutdownPush;
        const openPushListener = () => {
            this._log('info', device.address, 'Open push connection');
            push = atv.push();

            push.on('state', state => {
                this._log('info', device.address, JSON.stringify(state));
                Object.entries(state).forEach(([key, value]) => {
                    if (typeof value !== 'string') {
                        value = JSON.stringify(value);
                    }

                    this._mqtt.publish(device.topic + '/' + key, value, {retain: true});
                });
            });
            push.on('error', error => {
                this._log('error', device.address, 'Push Error', error);
            });
            push.on('close', () => {
                this._log('info', device.address, 'Push connection closed');
                if (!shutdownPush) {
                    openPushListener();
                }
            });
        };

        openPushListener();
        this._teardown.unshift(() => {
            shutdownPush = true;
            push.close();
        });


        /* MQTT -->  PYATV */

        this._mqtt.subscribe(device.topic + '/+');
        this._teardown.unshift(() => {
            return new Promise(resolve => this._mqtt.unsubscribe(device.topic + '/+', resolve));
        });

        this._mqtt.on('message', topic => {
            const key = keys.find(key => device.topic + '/' + key === topic);
            if (key && typeof atv[key] === 'function') {
                atv[key]().catch(err => {
                    this._log('error', device.address, `Unable to press key "${key}"`, err);
                });
            }

            if (topic === (device.topic + '/reconnect') && push) {
                push.close();
            }
        });
    }

    async stop() {
        await Promise.all(this._teardown);
    }
}


module.exports = PyAtvMqttBridge;
