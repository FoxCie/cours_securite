FROM alpine AS my_insecure_app

RUN echo -e 'test\ntest' | adduser user

RUN apk add make gcc musl-dev

USER user

WORKDIR /home/user

COPY test.c .

RUN make test

USER root

RUN chown root test
RUN chmod ug+s test

USER user

