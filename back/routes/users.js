const { hashPassword } = require('../middlewares/auth');
const UserModel = require('../models/UserModel');
const db = require("../db");

const userRoutes = require('express').Router();

userRoutes.get('/', (req, res) => {
  const callback = (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    }
    else {
      res.status(200).json(results);
    }
  };

  const userModel = new UserModel();
  userModel.selectAll(callback);
});

userRoutes.post('/', hashPassword, (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  db.query('INSERT INTO user (email, password) VALUES (?, ?)', [user.email, user.password], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    }
    else {
      const callback = (err, results) => {
        if (err) {
          console.log(err);
          res.status(500);
        }
        else {
          delete results[0].password;
          res.status(201).json(results[0]);
        }
      };

      const userModel = new UserModel();
      userModel.selectOneById(results.insertId, callback);
    }
  })
});

module.exports = userRoutes;
