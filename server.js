const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(helmet());
server.use(express.json());

const usersRouter = require('./users/users-router');

server.use('/api/users', usersRouter);

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

module.exports = server;