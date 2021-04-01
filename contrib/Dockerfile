# Usage
#
#   cd contrib
#   docker build -t pyatv-mqtt-bridge .
#   docker run -d \
#       --restart=always \
#       --name=pyatv-mqtt-bridge \
#       -v /opt/pyatv-mqtt-bridge/config.json:/app/config.json:ro \
#       pyatv-mqtt-bridge
#

FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y \
        python3 python3-pip

RUN apt-get install -y \
        curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y \
        nodejs

WORKDIR /app

RUN pip3 install pyatv
RUN npm install -g @sebbo2002/pyatv-mqtt-bridge

CMD ["pyatv-mqtt-bridge", "config.json"]
