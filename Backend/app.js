const express = require('express');
const expressApp = express();


expressApp.use(express.json());


const products = require('./routes/product');
expressApp.use('/api/v1', products);


const errorMiddleware = require('./middleware/errors');
expressApp.use(errorMiddleware);

module.exports = expressApp;