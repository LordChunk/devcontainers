#!/bin/sh

cd /var/www

php artisan cache:clear

php artisan migrate --froce

php artisan config:cache
php artisan route:cache
php artisan view:cache

/usr/bin/supervisord -c /etc/supervisord.conf