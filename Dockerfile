FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]