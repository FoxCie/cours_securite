FROM debian AS app

RUN useradd user

RUN apt update && apt install build-essential make -y

USER user

WORKDIR /home/user

COPY script.sh /root
COPY launch.c .

RUN make launch

USER root

RUN echo "Well played, you win!" > /root/flag.txt
RUN chown root launch launch.c /root/script.sh
RUN chmod u+s launch
RUN chmod o=r launch.c
RUN chmod +x /root
RUN chmod +x /root/script.sh
RUN chmod o=r /root/script.sh
RUN chmod o-rwx /root/flag.txt
RUN chmod ug=rw /root/flag.txt

USER user

