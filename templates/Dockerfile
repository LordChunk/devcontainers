FROM %FROM%

WORKDIR /var/www

# NodeJS
RUN curl -o- https://deb.nodesource.com/setup_16.x | bash

# Dependencies
RUN apt-get update && apt-get install -y git nginx xz-utils nodejs

# S6 Overlay
ARG OVERLAY_VERSION="v3.1.1.2"
ARG OVERLAY_ARCH="x86_64"

ENV S6_KEEP_ENV=1
ENV S6_CMD_WAIT_FOR_SERVICES_MAXTIME=30000

ADD https://github.com/just-containers/s6-overlay/releases/download/${OVERLAY_VERSION}/s6-overlay-noarch.tar.xz /tmp
RUN tar -C / -Jxpf /tmp/s6-overlay-noarch.tar.xz
ADD https://github.com/just-containers/s6-overlay/releases/download/${OVERLAY_VERSION}/s6-overlay-${OVERLAY_ARCH}.tar.xz /tmp
RUN tar -C / -Jxpf /tmp/s6-overlay-${OVERLAY_ARCH}.tar.xz

# PHP Extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions %EXTENSIONS%

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy files
COPY files/root/ /

EXPOSE 80
ENTRYPOINT [ "/init" ]
