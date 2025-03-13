FROM python AS app

WORKDIR /app

RUN pip install Flask Jinja2

COPY main.py .

CMD ["python3", "/app/main.py"]
