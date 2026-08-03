FROM node:lts-alpine@sha256:f70403e87646dc51b45295f4b8b70cdad0b63d2297c4c9899119b03f7af7a6b3 as build-container

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
