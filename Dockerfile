FROM node:18

WORKDIR /app

COPY package.json .
COPY package.lock.json .

RUN yarn

COPY . .


EXPOSE 3000

CMD ["npm", "start"]
