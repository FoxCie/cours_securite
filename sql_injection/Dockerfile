FROM dunglas/frankenphp AS my_app

RUN install-php-extensions pdo_pgsql

COPY ./app/admin.php /app/public
