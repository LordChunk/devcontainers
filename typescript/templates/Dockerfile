ARG base_image
FROM mcr.microsoft.com/devcontainers/typescript-node:0-${base_image}

# Install Cypress dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
  && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Preinstall Code Server for user 'vscode' to speed up first run
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su vscode -c "/tmp/install-vs-code-server.sh"