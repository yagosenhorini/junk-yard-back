const express = require('express');
app = express();
const db = require('./db');

const ProductController = require('./controller/controllerProduct');
app.use('/v1', ProductController);

module.exports = app;