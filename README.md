# Contacts API

This backend is based on NestJS Framework V5 (https://nestjs.com/)


## Docker
Runs on postgres database

## Env VARS:

- SERVER_PORT: 3000 default
- DB_HOST: localhost
- DB_PORT: 5432
- DB_USER: required
- DB_PASS: required
- DB_NAME: required


`docker build . -t contacts-api`

```
docker run -p 3000:3000 -e DB_HOST='dev.contacts.com' -e DB_PORT=5444 -e DB_USER='contacts_admin' -e DB_PASS='contacts_admin_pass' -e DB_NAME='contacts_dev' contacts-api
```
## Description

description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

