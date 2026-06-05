FROM node:22.18.0

WORKDIR / app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ['node','server.js']

