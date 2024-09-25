import type {NodePyATVDeviceOptions} from '@sebbo2002/node-pyatv';

export interface Config {
    broker: string;
    log?: (msg: LogParam) => (void),
    devices: ConfigDevice[];
}

export interface ConfigDevice extends NodePyATVDeviceOptions {
    topic: string;
}

export interface LogParam {
    level: string;
    host: string | null;
    message: string;
    error?: Error;
}
