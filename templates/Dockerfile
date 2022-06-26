FROM %FROM%

WORKDIR /var/www

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions %EXTENSIONS%

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY files/supervisor.conf /etc/supervisord.conf
COPY files/php.ini /usr/local/etc/php/conf.d/app.ini
COPY files/nginx.conf /etc/nginx/sites-enabled/default
COPY files/run.sh /bin/laravel.sh

RUN mkdir /var/log/laravel

RUN chmod +x /bin/laravel.sh

EXPOSE 80
ENTRYPOINT [ "/bin/laravel.sh" ]