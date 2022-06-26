FROM %FROM%

WORKDIR /var/www

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions %EXTENSIONS%

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY config/supervisor.conf /etc/supervisord.conf
COPY config/php.ini /usr/local/etc/php/conf.d/app.ini
COPY config/nginx.conf /etc/nginx/sites-enabled/default
COPY config/run.sh /bin/laravel.sh

EXPOSE 80
ENTRYPOINT [ "/bin/laravel.sh" ]