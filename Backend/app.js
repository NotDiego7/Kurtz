const express = require('express');
const expressApp = express();
expressApp.use(express.json());

const products = require('./routes/product');
expressApp.use('/api/v1', products);

module.exports = expressApp;