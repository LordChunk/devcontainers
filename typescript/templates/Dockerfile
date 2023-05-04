ARG base_image
FROM mcr.microsoft.com/devcontainers/typescript-node:${base_image}

# Install Cypress dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
  && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Preinstall Code Server for user 'node' to speed up first run
# We use 'node' instead of 'vscode' because the base image uses 'node' as the default user
# https://github.com/devcontainers/images/blob/main/src/javascript-node/.devcontainer/Dockerfile#L10
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su node -c "/tmp/install-vs-code-server.sh"