FROM node:alpine@sha256:e5615005591e2450e782fa82b10bf31e4c3a90b00f4f47f3691bcb4c03c5b1a2 as build-container

WORKDIR "/app"

COPY package*.json "/app/"
RUN apk add --no-cache --update bash && \
    npm ci

COPY . "/app/"
RUN npm ci && \
    npm run build && \
    rm -rf ./.github ./node_modules ./src ./test


FROM node:alpine@sha256:e5615005591e2450e782fa82b10bf31e4c3a90b00f4f47f3691bcb4c03c5b1a2
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN apk add --no-cache --update \
    python3 \
    bash \
    py3-pip \
    rust \
    gcc \
    musl-dev \
    python3-dev \
    libffi-dev \
    openssl-dev \
    cargo

RUN pip3 install pyatv
RUN apk del rust gcc musl-dev python3-dev libffi-dev openssl-dev cargo
RUN rm -rf "/root/.cache" "/root/.cargo" && \
    mkdir "/app" && \
    ln -s /app/dist/bin/cli.js /usr/local/bin/pyatv-mqtt-bridge

COPY --from=build-container "/app" "/app"
USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["pyatv-mqtt-bridge", "config.json"]
