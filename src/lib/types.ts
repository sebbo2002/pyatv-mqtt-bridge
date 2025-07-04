import type { NodePyATVDeviceOptions } from '@sebbo2002/node-pyatv';
import type { IClientOptions } from 'mqtt';

export interface Config {
    broker: string | IClientOptions;
    log?: (msg: LogParam) => void;
    devices: ConfigDevice[];
}

export interface ConfigDevice extends NodePyATVDeviceOptions {
    topic: string;
}

export interface LogParam {
    level: string;
    host: string | null | undefined;
    message: string;
    error?: Error;
}
