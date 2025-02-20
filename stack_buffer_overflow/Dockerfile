FROM alpine AS bof

RUN apk add build-base make

RUN adduser user --disabled-password

USER user

WORKDIR /home/user

COPY program.c  .

RUN make program

USER root
RUN echo "Well played, you win!" > /root/flag.txt
RUN chown root program program.c
RUN chmod u+s program
RUN chmod go=r program.c
RUN chmod +x /root
RUN chmod o-rwx /root/flag.txt
RUN chmod ug=rw /root/flag.txt

USER user

CMD ["/bin/sh", "-c", "while true; do sleep 3600; done"]

