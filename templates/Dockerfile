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

USER vscode

# Preinstall Code Server to speed up first run
RUN curl -fsSL https://code-server.dev/install.sh | sh