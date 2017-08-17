### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine

COPY package.json .

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /app && cp -R ./node_modules ./app

WORKDIR /app

COPY . .

VOLUME /app/data

EXPOSE 3000

CMD ["npm", "start"]
