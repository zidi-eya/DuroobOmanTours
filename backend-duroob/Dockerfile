# stage de base
FROM php:8.2-fpm

# dépendances
RUN apt-get update && apt-get install -y \
    git zip unzip libzip-dev libonig-dev libpng-dev libpq-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath

# composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# workdir
WORKDIR /var/www/html

# copier tout le code
COPY . .

# installer dépendances après avoir copié le code (important)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
