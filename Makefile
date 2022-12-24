.PHONY: preview build wasm application

wasm:
	GOOS=js GOARCH=wasm go build -o  ./application/src/public/api.wasm ./webassembly/main.go

application:
	npm --prefix ./application run build

preview:
	npm --prefix ./application run dev

build: wasm application
