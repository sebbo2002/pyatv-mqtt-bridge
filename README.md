# pyatv-mqtt-bridge

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
![Dependencies](https://img.shields.io/david/sebbo2002/pyatv-mqtt-bridge?style=flat-square)

MQTT Bridge allows you to remote control your Apple TV using the MQTT protocol. For many home automation systems, for
example, this protocol is supported, so Apple TV can be integrated into your existing automation system. In addition to
simulating key presses, you can also query the current state of Apple TV.


## ☁ Installation

Before you use this module you need to install `pyatv`. See FAQ section for installation tips.

To install the javascript module via npm run:

	npm install -g @sebbo2002/pyatv-mqtt-bridge

You can also use the provided Docker container to run `pyatv-mqtt-bridge` within docker:

    docker pull sebbo2002/pyatv-mqtt-bridge

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
      "name": "Any Name",
      "topic": "home/livingroom/appletv",
      "host": "192.168.1.2",
      "id": "AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE",
      "airplayCredentials": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB:CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
    }
  ]
}
```

3. Start pyatv
```bash
pyatv-mqtt-bridge /home/eve/pyatv-mqtt-bridge.json

# or use the Docker container

docker run -d --restart=always --name=pyatv-mqtt-bridge \
    -v $(pwd)/config.json:/app/config.json:ro \
    sebbo2002/pyatv-mqtt-bridge
```



## 🤨 FAQ

#### How to install pyatv

```bash
pip3 install pyatv
```

#### How can I enable debugging mode?

```bash
pyatv-mqtt-bridge --debug /home/eve/pyatv-mqtt-bridge.json

# or if you use the Docker container

docker run -d --restart=always --name=pyatv-mqtt-bridge \
    -v $(pwd)/config.json:/app/config.json:ro \
    sebbo2002/pyatv-mqtt-bridge \
    pyatv-mqtt-bridge --debug /app/config.json
```


#### How can I send commands to the Apple TV?
To execute a command send any message to the topic `$device/$command`. `$device` is the configured topic of the device
and `$command` is a command from [this list](https://github.com/sebbo2002/node-pyatv/blob/develop/lib/types.ts#L49).
Example: `/home/living/appletv/menu`.


## Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
