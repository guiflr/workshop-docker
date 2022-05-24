FROM node:14.18.1

WORKDIR /first

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["node", "src/server.js"]