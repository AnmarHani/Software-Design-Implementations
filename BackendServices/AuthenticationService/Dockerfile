FROM node:19-alpine3.16

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]