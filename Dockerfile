FROM node:carbon-alpine as builder
WORKDIR /tmp/

COPY . .
RUN npm install
RUN npm run build:prod

FROM node:carbon-alpine

WORKDIR /app
COPY --from=builder /tmp ./
ENV NODE_ENV production
RUN rm -rf src test && npm prune
ENTRYPOINT ["npm", "run"]
CMD ["start:prod"]
