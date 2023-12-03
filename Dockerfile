FROM node:lts-alpine@sha256:da32af0cf608622b1550678b2552b7d997def7d0ada00e0eca0166ed2ea42186 as build-container

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
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY package*.json "/app/"
RUN npm ci --only-production

COPY . "/app"
USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
