# build environment production

FROM node:16-alpine

WORKDIR /app
COPY package.json .

RUN yarn install
RUN yarn global add sequelize-cli forever

ENV NODE_ENV=production
ENV PATH=/app/node_modules/.bin:$PATH

COPY . .

#RUN sequelize db:migrate

EXPOSE 3000

CMD ["forever", "index.js"]
