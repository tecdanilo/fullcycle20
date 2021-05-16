FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@7.5.6

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

CMD [ "/bin/bash", "-c", "/home/node/app/run.sh" ]