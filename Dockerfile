FROM node:16

WORKDIR /home/node/app

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY package*.json ./

RUN npm install 

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 1337

CMD [ "npm", "run", "develop" ]