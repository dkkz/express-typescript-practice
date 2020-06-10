# Pactice TypeScript and Express

Pactice Express use TypeScript and more.

## Required

- [Docker](https://www.docker.com/) 🐳

## Development

```console
git@github.com:dkkz/express-typescript-practice.git
cd express-typescript-practice
docker-compose up
```

Open `http://localhost:3000` in your browser.

### Setup Dev tools

To use [Prettier](https://prettier.io/), install node modules to docker host machine.

```console
npm install --no-save
```

### Add package

```console
docker-compose exec express npm install --save AWESOME_PACKAGE
# or
docker-compose exec express npm install --save-dev AWESOME_PACKAGE
```

## Run tests ✅

```console
docker-compose exec express npm test -- --coverage
```

## Build

```console
docker-compose exec express npm run build
```

You can see the production build in `build/` .
