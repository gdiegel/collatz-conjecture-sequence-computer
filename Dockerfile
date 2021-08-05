FROM node:14-alpine as BUILD_IMAGE

ENV HOSTNAME 0.0.0.0
ENV PORT 1337
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm ci --only=production

FROM node:14-alpine

COPY --from=BUILD_IMAGE /usr/src/app/ /usr/src/app/

WORKDIR /usr/src/app

EXPOSE 8080

CMD [ "node", "server.js" ]
