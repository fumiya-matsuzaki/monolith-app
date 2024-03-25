FROM node:18.18-alpine

RUN apk add --no-cache libc6-compat
RUN apk update

ENV NODE_ENV=development
WORKDIR /webview
COPY ./webview/package.json .
COPY ./webview/package-lock.json .

RUN npm install -g npm@10.2.4
RUN npm install
COPY ./webview .
CMD ["npm", "run", "dev"]