# multi-language-bazel-monorepo

![Getting Started with Bazel](https://user-images.githubusercontent.com/17026751/147872728-cba68987-9a5c-4cb6-9777-47c51efc4c75.png)

## Prerequisites

- [bazelisk installed](https://github.com/bazelbuild/bazelisk) (`npm install -g @bazel/bazelisk`) - bazel launcher that also manages the bazel installation & version using the [.bazelversion](./.bazelversion) file.

## Useful Commands

### Clean all cache
- `yarn bazel:clean`

### Build all targets

- `bazel build //...`

### Run all test targets

- `bazel test //...`

### Run Python web app

- `bazel run //projects/python/py_web`
- http://localhost:5000

### Run Go web app

- `bazel run //projects/golang/go_web`
- http://localhost:8000

### Run NodeJS web app

- `bazel run //projects/nodejs/node_web`
- http://localhost:8080

### Run NodeJS web with Typescript app

- `bazel run //projects/typescript/ts_web`
- http://localhost:8080
