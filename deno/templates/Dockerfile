FROM mcr.microsoft.com/devcontainers/base:jammy

ARG deno_version
# Install Deno with support for ARM64
COPY deno/scripts/deno-install.sh /tmp/deno-install.sh
RUN /tmp/deno-install.sh ${deno_version}

# Preinstall Code Server for user 'vscode' to speed up first run
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su vscode -c "/tmp/install-vs-code-server.sh"