FROM debian AS my_insecure_app

RUN adduser user

RUN apt update && apt install build-essential make -y

USER user

WORKDIR /home/user

COPY test.c .

RUN make test

USER root

RUN chown root test
RUN chmod ug+s test

USER user

