FROM ubuntu AS bof

RUN apt update && apt install -y build-essential make bash

RUN adduser user --disabled-password

USER user

WORKDIR /home/user

COPY program.c  .

RUN make CFLAGS="-fno-stack-protector -fno-PIE -no-pie -fno-PIC" program

USER root
RUN echo "Well played, you win!" > /root/flag.txt
RUN chown root program program.c
RUN chmod u+s program
RUN chmod go=r program.c
RUN chmod +x /root
RUN chmod o-rwx /root/flag.txt
RUN chmod ug=rw /root/flag.txt

USER user

CMD ["/bin/bash", "-c", "while true; do sleep 3600; done"]

