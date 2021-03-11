# RESTful API with Node and Express

# Dependencies

- express
- mongodb
- mongoose
- nodemon

# Dev Dependencies

- babel-cli
- babel-preset-env
- babel-preset-stage-0

# Mongo

## Tools

- [Robo 3T](https://robomongo.org)
- Mongo runs on port 27017

## Run from terminal

Run manually as a background process

```bash
mongod --config /usr/local/etc/mongod.conf --fork
```

Stop with

```bash
pkill mongod
```

or run as a MacOS service:

```bash
brew services start mongodb-community@4.4

brew services stop mongodb-community@4.4
```

## Start a Mongo shell

```bash
mongo
```
