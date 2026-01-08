FROM debian AS my_insecure_app

RUN useradd -m user

RUN apt update && apt install build-essential make -y

USER user

WORKDIR /home/user

COPY test.c pwn.c

RUN make pwn

USER root

RUN chown root pwn
RUN chmod ug+s pwn

USER user

