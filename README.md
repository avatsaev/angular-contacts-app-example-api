# Contacts API

This backend is based on NestJS Framework V5 (https://nestjs.com/)


## Docker
Runs on postgres database

## Env VARS:

- SERVER_PORT: 3000 default
- DB_URL: Postgres connection URL

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

