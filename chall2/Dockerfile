FROM dunglas/frankenphp AS my_app

COPY ./app/index.php /app/public
COPY ./files/lorem.txt /app/public/lorem.txt
COPY ./files/lfi.txt /app/public/lfi.txt

RUN echo 'Well played, you win' > /app/flag.txt

