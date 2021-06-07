// init the express app
const express = require('express');
const app = express();

// add routes
const routes = require('./routes');
app.use(routes);

module.exports = app;
