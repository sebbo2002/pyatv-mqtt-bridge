# pyatv-mqtt-bridge

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
![Status](https://git-badges.sebbo.net/98/master/build)

MQTT Bridge allows you to remote control your Apple TV using the MQTT protocol. For many home automation systems, for 
example, this protocol is supported, so Apple TV can be integrated into your existing automation system. In addition to 
simulating key presses, you can also query the current state of Apple TV (pyatv push_notifications).


## ☁ Installation

Before you use this module you need to install `pyatv` and `unbuffer`. See FAQ section for installation tips.

To install the javascript module via npm run:

	npm install -g @sebbo2002/pyatv-mqtt-bridge


## ⚒ Quick Start

1. Use pyatv to connect to your Apple TV and authenticate [[?](https://github.com/postlund/pyatv/#using-the-cli-application)]

2. Create a new pyatv-mqtt-bridge configuration file
```json
{
  "broker": "mqtt://192.168.1.1",
  "devices": [
    {
      "topic": "/home/livingroom/appletv",
      "address": "192.168.1.2",
      "loginId": "************************************"
    }
  ]
}
```

3. Start pyatv
```bash
pyatv-mqtt-bridge /home/eve/pyatv-mqtt-bridge.json
```



## 🤨 FAQ

#### How to install pyatv and unbuffer on macOS

```bash
pip3 install pyatv

# homebrew required
brew install expect
```


## Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
