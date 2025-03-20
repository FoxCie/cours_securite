FROM python

WORKDIR /app

RUN pip install Flask

COPY ./ .

RUN pip install -e .

COPY ./launch.sh /launch.sh

RUN chmod +x /launch.sh

CMD ["/launch.sh"]
