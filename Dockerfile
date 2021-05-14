FROM node:lts-alpine@sha256:3689ad4435a413342ccc352170ad0f77433b41173af7fe4c0076f0c9792642cb as build-container

WORKDIR "/app"

COPY package*.json "/app/"
RUN apk add --no-cache --update bash && \
    npm ci

COPY . "/app/"
RUN npm ci && \
    npm run build && \
    rm -rf ./.github ./node_modules ./src ./test


FROM node:lts-alpine@sha256:3689ad4435a413342ccc352170ad0f77433b41173af7fe4c0076f0c9792642cb
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN apk add --no-cache --update \
    python3 bash py3-pip \
    rust gcc musl-dev python3-dev libffi-dev openssl-dev cargo && \
    pip3 install pyatv && \
    apk del rust gcc musl-dev python3-dev libffi-dev openssl-dev cargo && \
    rm -rf "/root/.cache" "/root/.cargo" && \
    mkdir "/app" && \
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY --from=build-container "/app" "/app"
USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
