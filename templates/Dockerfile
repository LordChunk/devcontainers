FROM mcr.microsoft.com/devcontainers/php:%FROM%

# Install MariaDB client
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mariadb-client \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install specified extensions
RUN docker-php-ext-install %EXTENSIONS%

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="lts/*"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# Preinstall Code Server for user 'vscode' to speed up first run
# Script source: https://gist.github.com/b01/0a16b6645ab7921b0910603dfb85e4fb
RUN su vscode -c "umask 0002 && curl -fsSL https://gist.githubusercontent.com/b01/0a16b6645ab7921b0910603dfb85e4fb/raw/f32b6371ed66085251c92bf98bfe9b7109c68e09/download-vs-code-server.sh | sh"