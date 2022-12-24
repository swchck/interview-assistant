# syntax=docker/dockerfile:1.2
FROM tinygo/tinygo

WORKDIR /wasm

ENV GOOS=js 
ENV GOARCH=wasm

COPY . .

RUN --mount=type=cache,target=/root/.cache/go-build \
    go build -o build/api.wasm

