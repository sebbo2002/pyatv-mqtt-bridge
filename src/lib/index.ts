'use strict';

import {Config, ConfigDevice, LogParam} from './types.js';
import {connect, MqttClient} from 'mqtt';
import pyatv, {NodePyATVDeviceEvent, NodePyATVKeys} from '@sebbo2002/node-pyatv';

export default class PyAtvMqttBridge {
    private mqttClient: MqttClient | null = null;
    private readonly options: Config;
    private readonly teardown: Array<() => Promise<void>> = [];

    constructor(options: Config) {
        if (typeof options.broker !== 'string') {
            throw new Error('options.broker is not set!');
        }
        if (!Array.isArray(options.devices) || !options.devices.length) {
            throw new Error('options.devices is not set!');
        }
        if (options.devices.find(d => typeof d.topic !== 'string')) {
            throw new Error('options.devices.topic is not set!');
        }
        if (options.devices.find(d => typeof d.host !== 'string')) {
            throw new Error('options.devices.host is not set!');
        }
        if (options.devices.find(d => typeof d.name !== 'string')) {
            throw new Error('options.devices.name is not set!');
        }

        this.options = options;
        this.teardown = [];

        this.start().catch(err => {
            this.log({
                level: 'error',
                host: null,
                message: 'Unable to start bridge',
                error: err
            });
        });
    }

    private log(msg: LogParam) {
        if (this.options.log) {
            try {
                this.options.log.apply(this, [msg]);
            } catch (err) {
                console.log('Unable to call custom log function:');
                console.log(err);
            }
        }
    }

    private async start() {
        const errorListener = (error: Error) => this.log({
            level: 'error',
            host: null,
            message: 'MQTT error',
            error
        });

        this.mqttClient = connect(this.options.broker);
        this.mqttClient.on('error', errorListener);
        this.teardown.unshift(async () => {
            if (this.mqttClient) {
                this.mqttClient.off('error', errorListener);
                await new Promise(resolve => {
                    if (this.mqttClient) {
                        this.mqttClient.end(false, () => resolve(undefined));
                    }
                });
            }
        });

        await Promise.all(
            this.options.devices.map(device => this.startDevice(device))
        );
    }

    private async startDevice(device: ConfigDevice) {
        this.log({
            level: 'info',
            host: device.host,
            message: 'Setup device…'
        });

        const atv = pyatv.device(Object.assign({}, device, {
            debug: (message: string) => this.log({
                level: 'info',
                host: device.host,
                message
            })
        }));


        /* MQTT <--  PYATV */

        if (this.mqttClient) {
            this.mqttClient.publish(device.topic + '/host', device.host, {retain: true});
            this.mqttClient.publish(device.topic + '/name', device.name, {retain: true});
            this.mqttClient.publish(device.topic + '/id', device.id || '', {retain: true});
        }

        const updateListener = (event: NodePyATVDeviceEvent | Error) => {
            if(event instanceof NodePyATVDeviceEvent) {
                this.log({
                    level: 'info',
                    host: device.host,
                    message: JSON.stringify(event)
                });

                if (this.mqttClient) {
                    const value = event.value === null ? '' : String(event.value);
                    this.mqttClient.publish(device.topic + '/' + event.key, value, {retain: true});
                }
            }
        };
        const errorListener = (error: Error | NodePyATVDeviceEvent) => {
            if (error instanceof Error) {
                this.log({
                    level: 'error',
                    host: device.host,
                    message: 'Push Error',
                    error
                });
            }
        };

        atv.on('update', updateListener);
        atv.on('error', errorListener);
        this.teardown.unshift(async () => {
            atv.off('update', updateListener);
            atv.off('error', errorListener);
        });


        /* MQTT -->  PYATV */

        if (this.mqttClient) {
            this.mqttClient.subscribe(device.topic + '/+');
            this.teardown.unshift(() => {
                return new Promise((resolve, reject) => {
                    if(this.mqttClient) {
                        this.mqttClient.unsubscribe(device.topic + '/+', error => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve();
                            }
                        });
                    }
                });
            });

            this.mqttClient.on('message', (topic, body) => {
                if (device.topic + '/launch' === topic) {
                    const id = body.toString();
                    atv.launchApp(id).catch(error => {
                        this.log({
                            level: 'error',
                            host: device.host,
                            message: `Unable to launch app "${id}"`,
                            error
                        });
                    });
                    return;
                }

                const key = Object
                    .keys(NodePyATVKeys)
                    .find(key => device.topic + '/' + key === topic) as NodePyATVKeys | undefined;

                if(key) {
                    atv.pressKey(key).catch(error => {
                        this.log({
                            level: 'error',
                            host: device.host,
                            message: `Unable to press key "${key}"`,
                            error
                        });
                    });
                }
            });
        }
    }

    async stop(): Promise<void> {
        await Promise.all(this.teardown);
    }
}
