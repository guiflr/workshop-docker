FROM node:14.18.1

ENV NODE_ENV=development

WORKDIR /first

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["node", "src/server.js"]