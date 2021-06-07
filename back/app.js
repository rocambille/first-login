const express = require('express');

// init the express app
const app = express();

// define the index route
app.get('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

module.exports = app;
