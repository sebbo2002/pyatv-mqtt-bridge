FROM node:lts-alpine@sha256:a0b9bf06e4e6193cf7a0f58816cc935ff8c2a908f81e6f1a95432d679c54fbfd as build-container

WORKDIR "/app"

COPY package*.json "/app/"
RUN apk add --no-cache --update bash && \
    npm ci --verbose

COPY . "/app/"
RUN npm run build && \
    rm -rf ./.github ./src ./test ./node_modules


FROM ghcr.io/postlund/pyatv:latest
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
WORKDIR "/app"

RUN apk add --no-cache --update nodejs npm bash dumb-init && \
    addgroup -g 1000 app && \
    adduser -u 1000 -G app -s /bin/sh -D app && \
    ln -s /app/dist/bin/cli.mjs /usr/local/bin/pyatv-mqtt-bridge

COPY package*.json "/app/"
RUN npm ci --only-production

COPY . "/app"
USER app

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
