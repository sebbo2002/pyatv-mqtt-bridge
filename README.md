# pyatv-mqtt-bridge

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
![Dependencies](https://img.shields.io/depfu/sebbo2002/pyatv-mqtt-bridge?style=flat-square)

MQTT Bridge allows you to remote control your Apple TV using the MQTT protocol. For many home automation systems, for
example, this protocol is supported, so Apple TV can be integrated into your existing automation system. In addition to
simulating key presses, you can also query the current state of Apple TV.


## ☁ Installation

Before you use this module you need to install `pyatv`. See FAQ section for installation tips.

To install the javascript module via npm run:

	npm install -g @sebbo2002/pyatv-mqtt-bridge


## ⚒ Quick Start

1. Use pyatv to connect to your Apple TV and authenticate [[?](https://pyatv.dev/getting-started/)]

2. Create a new pyatv-mqtt-bridge configuration file. Your can use the
   [`config.example.json`](https://github.com/sebbo2002/pyatv-mqtt-bridge/blob/develop/config.example.json) to start
   with.

```json
{
  "broker": "mqtt://192.168.1.1",
  "devices": [
    {
      "topic": "/home/livingroom/appletv",
      "id": "************************************",
      "host": "192.168.1.2"
    }
  ]
}
```

3. Start pyatv
```bash
pyatv-mqtt-bridge /home/eve/pyatv-mqtt-bridge.json
```



## 🤨 FAQ

#### How to install pyatv

```bash
pip3 install pyatv
```

#### How can I enable debugging mode?

```bash
pyatv-mqtt-bridge --debug /home/eve/pyatv-mqtt-bridge.json
```


#### How can I send commands to the Apple TV?
To execute a command send any message to the topic `$device/$commad`. `$device` is the configured topic of the device
and `$command` is a command from [this list](https://github.com/sebbo2002/node-pyatv/blob/develop/lib/types.ts#L49).
Example: `/home/living/appletv/menu`.


## Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
