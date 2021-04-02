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

ARG BASEIMAGE=multiarch/alpine:x86_64-latest-stable
FROM $BASEIMAGE as build-container

RUN apk add --no-cache --update nodejs nodejs-npm bash

COPY package*.json "/app/"
WORKDIR "/app"
RUN npm ci

COPY . "/app/"
RUN npm run build && \
    rm -rf ./node_modules ./bin ./src



FROM $BASEIMAGE

ARG UID=1000
ARG GID=1000
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN apk add --no-cache --update \
    nodejs nodejs-npm python3 bash \
    py3-pip rust gcc musl-dev python3-dev libffi-dev openssl-dev cargo && \
    pip3 install pyatv && \
    apk del rust gcc musl-dev python3-dev libffi-dev openssl-dev cargo && \
    rm -rf "/root/.cache" "/root/.cargo" && \
    mkdir "/app" && \
    addgroup -g $GID app && \
    adduser -u $UID -G app -s /bin/sh -D app && \
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY --from=build-container "/app" "/app"
WORKDIR "/app"
RUN npm ci

USER app
CMD ["pyatv-mqtt-bridge", "config.json"]
