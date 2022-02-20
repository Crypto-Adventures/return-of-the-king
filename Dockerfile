FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN node -v

CMD [ "npm", "run", "test" ]
