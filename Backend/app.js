const express = require('express');
const app = express();


app.use(express.json());


const productsRouter = require('./routes/product');
app.use('/api/v1', productsRouter);


const errorMiddleware = require('./middleware/errors');
app.use(errorMiddleware);

module.exports = app;