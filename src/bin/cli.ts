#!/usr/bin/env node
'use strict';

import {existsSync, readFileSync} from 'fs';
import {resolve} from 'path';
import PyAtvMqttBridge from '../lib/index.js';
import {LogParam} from '../lib/types.js';

console.log('# pyatv-mqtt-bridge');
console.log('----------------------------');

const debug = process.argv.indexOf('--debug') > -1;
const configPath = resolve(process.cwd(), process.argv[process.argv.length - 1]);
if (!existsSync(configPath)) {
    console.log('Usage: pyatv-mqtt-bridge [--debug] ~/pyatv-mqtt-bridge-config.json');
    process.exit(1);
}

let config;
try {
    config = JSON.parse(readFileSync(configPath, 'utf8'));
}
catch (err) {
    console.log('Unable to parse configuration file:');
    console.log(err);
    console.log('\nHave you removed the comments?\n');
    process.exit(1);
}

try {
    if (debug) {
        Object.assign(config, {
            log: (msg: LogParam) => {
                let string = `[${msg.level}]`;
                if (msg.host) {
                    string += `[${msg.host}]`;
                }
                string += ' ';
                if (msg.message) {
                    string += msg.message;
                }
                if (msg.message && msg.error) {
                    string += ': ';
                }
                if (msg.error && msg.error.stack) {
                    string += msg.error.stack;
                }
                if (msg.error) {
                    string += msg.error.toString();
                }

                console.log(string);
            }
        });
    }

    new PyAtvMqttBridge(config);
} catch (err) {
    console.log('Unable to start bridge:');
    console.log(err);
}
