<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS Contacts API

This backend is based on NestJS Framework V6 (https://nestjs.com/)

- DB: Postgres
- Websockets: Socket.io
- Synchronises sockets thourgh Redis adapter for horizontal scaling 



## Env VARS:
- SERVER_PORT: 3000
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB
- REDIS_HOST: redis
- REDIS_PORT: 6379

## Run

`docker-compose up --build `

Server will be running on http://localhost:3000

# Endpoints

 - `GET /contacts` : returns an array of `Contacts`
 - `GET /contacts/:id`: returns a `Contact` shape 
 - `POST /contacts`: Create a contact, returns a `Contact` shape
 - `PATCH /contacts/:id`: Partially update a `Contact`, returns a `Contact` shape
 - `DELETE /contacts/:id`: Delete a `Contact`, empty response

### Contact shape:
```typescript
interface Contact {
    id?: number | string;
    name: string;
    email: string;
    phone?: string;
}
```
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

