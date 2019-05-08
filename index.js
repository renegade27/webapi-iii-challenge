// code away!
const express = require('express');
const middleware = require('./middlewares');

const server = express();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

server.use(express.json());
server.use(middleware.capital);
server.use('/api', postRoutes);
server.use('/api', userRoutes);

server.listen(5000, () => {
    console.log("Server is listening on port 5000.")
})
