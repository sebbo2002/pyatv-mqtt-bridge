FROM node:alpine@sha256:6b56197d33a56cd45d1d1214292b8851fa1b91b2ccc678cee7e5fd4260bd8fae as build-container

WORKDIR "/app"

COPY package*.json "/app/"
RUN apk add --no-cache --update bash && \
    npm ci

COPY . "/app/"
RUN npm run build && \
    rm -rf ./.github ./src ./test ./node_modules


FROM node:alpine@sha256:6b56197d33a56cd45d1d1214292b8851fa1b91b2ccc678cee7e5fd4260bd8fae
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
WORKDIR "/app"

RUN apk add --no-cache --update \
    dumb-init \
    python3 \
    bash \
    py3-pip \
    rust \
    gcc \
    musl-dev \
    python3-dev \
    libffi-dev \
    libressl-dev \
    openssl-dev \
    cargo && \
    pip3 install pyatv && \
    apk del rust gcc libressl-dev musl-dev python3-dev libffi-dev openssl-dev cargo && \
    rm -rf "/root/.cache" "/root/.cargo" && \
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY --from=build-container /app/package*.json "/app/"
RUN npm ci --only-production

COPY --from=build-container "/app" "/app"
USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
