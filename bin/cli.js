#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const PyAtvMqttBridge = require('../src');

console.log('# pyatv-mqtt-bridge');
console.log('----------------------------');

const debug = process.argv.indexOf('--debug') > -1;
const configPath = path.resolve(process.cwd(), process.argv[process.argv.length - 1]);
if (!fs.existsSync(configPath)) {
    console.log('Usage: pyatv-mqtt-bridge [--debug] ~/pyatv-mqtt-bridge-config.json');
    process.exit(1);
}

let config;
try {
    config = require(configPath);
}
catch(err) {
    console.log('Unable to parse configuration file:');
    console.log(err);
    process.exit(1);
}

try {
    if(debug) {
        Object.assign(config, {
            log: (level, address, message, error) => {
                let string = `[${level}]`;
                if(address) {
                    string += `[${address}]`
                }
                string += ' ';
                if(message) {
                    string += message;
                }
                if(message && error) {
                    string += ': ';
                }
                if(error && error.stack) {
                    string += error.stack;
                }
                if(error) {
                    string += error.toString();
                }

                console.log(string);
            }
        })
    }

    new PyAtvMqttBridge(config);
}
catch(err) {
    console.log('Unable to start bridge:');
    console.log(err);
}
