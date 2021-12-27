FROM node:lts-alpine@sha256:a9b9cb880fa429b0bea899cd3b1bc081ab7277cc97e6d2dcd84bd9753b2027e1 as build-container

WORKDIR "/app"

COPY package*.json "/app/"
RUN apk add --no-cache --update bash && \
    npm ci

COPY . "/app/"
RUN npm run build && \
    rm -rf ./.github ./src ./test ./node_modules


FROM ghcr.io/postlund/pyatv:master@sha256:082f97672b936611816872f864eb5c4e54409dc97bb60e2ff1fd3cb7f0c1715c
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
WORKDIR "/app"

RUN apk add --no-cache --update nodejs npm bash dumb-init && \
    addgroup -g 1000 app && \
    adduser -u 1000 -G app -s /bin/sh -D app && \
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY --from=build-container /app/package*.json "/app/"
RUN npm ci --only-production

COPY --from=build-container "/app" "/app"
USER app

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
