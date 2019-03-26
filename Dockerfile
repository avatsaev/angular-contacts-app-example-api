FROM node:carbon-alpine as builder
WORKDIR /tmp/

COPY . .
RUN npm install
RUN npm run build

FROM node:carbon-alpine

WORKDIR /app
COPY --from=builder /tmp ./
ENV NODE_ENV production
ENTRYPOINT ["npm", "run"]
CMD ["start"]
