FROM mcr.microsoft.com/devcontainers/base:jammy

ARG deno_version=
# Install Deno with support for ARM64
COPY deno/scripts/deno-install.sh /tmp/deno-install.sh
RUN /tmp/deno-install.sh ${deno_version}

# Preinstall Code Server for user 'node' to speed up first run
# We use 'node' instead of 'vscode' because the base image uses 'node' as the default user
# https://github.com/devcontainers/images/blob/main/src/javascript-node/.devcontainer/Dockerfile#L10
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su node -c "/tmp/install-vs-code-server.sh"