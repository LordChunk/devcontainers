FROM mcr.microsoft.com/devcontainers/base:ubuntu

ARG deno_version
RUN curl -fsSL https://deno.land/install.sh | sh -s ${deno_version}

# Preinstall Code Server for user 'vscode' to speed up first run
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su vscode -c "/tmp/install-vs-code-server.sh linux"