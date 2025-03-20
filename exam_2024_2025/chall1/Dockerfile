FROM node:23-alpine

RUN apk add sqlite

COPY ./app /app

WORKDIR /app

RUN npm i

CMD ["node", "/app/app.js"]
