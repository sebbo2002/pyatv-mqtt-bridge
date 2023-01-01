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

You can also use the provided Docker container to run `pyatv-mqtt-bridge` within docker:

    docker pull sebbo2002/pyatv-mqtt-bridge

## ⚒ Quick Start

1. Use pyatv to connect to your Apple TV and authenticate [[?](https://pyatv.dev/documentation/getting-started/)]

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

-   By command line :

```bash
pyatv-mqtt-bridge /home/eve/pyatv-mqtt-bridge.json
```

-   or use the Docker container :

```bash
docker run -d --restart=always --name=pyatv-mqtt-bridge \
    -v $(pwd)/config.json:/app/config.json:ro \
    sebbo2002/pyatv-mqtt-bridge
```

-   or just run the Docker container from the [`docker-compose.yml`](docker-compose.yml) file with :

```bash
docker-compose up -d
```

## 🤨 FAQ

#### How to install pyatv

```bash
pip3 install pyatv
```

#### How can I enable debugging mode ?

You just need to add the `--debug` option.

-   In command line :

```bash
pyatv-mqtt-bridge --debug /home/eve/pyatv-mqtt-bridge.json
```

-   or while using the Docker container :

```bash
docker run -d --restart=always --name=pyatv-mqtt-bridge \
    -v $(pwd)/config.json:/app/config.json:ro \
    sebbo2002/pyatv-mqtt-bridge \
    pyatv-mqtt-bridge --debug /app/config.json
```

-   or while using the [`docker-compose.yml`](docker-compose.yml) file :

```yaml
command: pyatv-mqtt-bridge --debug /app/config.json
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then restart the container with :

```bash
   docker-compose up
```

#### How can I send commands to the Apple TV?

To execute a command send any message to the topic `$device/$command`. `$device` is the configured topic of the device
and `$command` is a command from [this list](https://github.com/sebbo2002/node-pyatv/blob/develop/src/lib/types.ts#L49).
Example: `/home/living/appletv/menu`.

#### How to check the current Apple TV power state and other status information ?

You can listen to several subtopics from the root MQTT topic you've set on your `config.json` file
(i.e. : `/home/living/appletv`), such as `/powerState` (on, off) and `/deviceState` (iddle, playing, etc...).

#### When the Apple TV is off, the turnOff command turns it on instead, how to fix this ?

Say you send an MQTT message to turn off your Apple TV each time you're leaving home,
with the following MQTT topic : `/home/living/appletv/turnOff`.  
... but when you are back home, sometimes your Apple TV is on ! 🤔

Actually, if you press the power button in the right upper corner of your Apple TV remote iOS app, while your Apple TV
is already off, it will switch it on as well, and this project only provides bridging between MQTT
and PyATV / Apple TV APIs, with no additional data persistence.

> (You could use the `/suspend` command instead of `/turnOff` to avoid this, but the `suspend` and `wakeup`
> commands are deprecated and may lead to unexpected behaviors).

So you just need to implement a listener for the powerState MQTT topic (i.e. : `/home/living/appletv/powerState`)
in your own app, and store the payload value somewhere (DB, local file, Redis...).

Then your app logic with some "standby apple TV" feature should trigger an MQTT `/turnOff` command ONLY when your
powerState stored value is 'on'.

## Copyright and license

Copyright (c) Sebastian Pekarek under the [MIT license](LICENSE).
