# syntax=docker/dockerfile:1.2
FROM build/wasm as wasm
FROM node:alpine

WORKDIR /app

COPY . .

COPY --from=wasm /wasm/build/api.wasm ./src/assets

RUN npm install && \
    npm run build

