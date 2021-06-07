const userRoutes = require('express').Router();

userRoutes.get('/', (req, res) => {
  res.send('Here will come the list of users');
});
  
module.exports = userRoutes;
