FROM node:16.13-buster

WORKDIR /usr/src/app

COPY yarn.lock package.json src index.html package.json tsconfig.json vite.config.ts ./

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]