ARG base_image
FROM mcr.microsoft.com/devcontainers/php:${base_image}

ARG extensions

# Install MariaDB client
RUN  export DEBIAN_FRONTEND=noninteractive \
    # Add Yarn key to stop apt update failing
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - \
    && apt-get update \
    # MariaDB Client
    && apt-get install -y mariadb-client \
    # Cypress dependencies
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install specified extensions
RUN docker-php-ext-install ${extensions}

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="lts/*"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# Preinstall Code Server for user 'vscode' to speed up first run
COPY scripts/install-vs-code-server.sh /tmp/install-vs-code-server.sh
RUN su vscode -c "/tmp/install-vs-code-server.sh"
