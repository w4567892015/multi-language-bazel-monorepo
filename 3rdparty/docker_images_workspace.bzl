load("@io_bazel_rules_docker//container:container.bzl", "container_pull")

def images_dependencies():
    container_pull(
        name = "node_base",
        registry = "index.docker.io",
        repository = "library/node",
        tag = "16-alpine",
        digest = "sha256:9da65f99264be2a78682095c4789b3d8cab12e0012def7d937d7125ed6e7695c",
    )
