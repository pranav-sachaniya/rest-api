// route work
const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/userModels'); //import schema

const router = express.Router(); // instance for route

// routing using method
router.get('/gets', (req, res, next) => {
  res.status(200).json({
    message: 'This is get request'
  });
});

// routing using post method 
router.post('/posts', (req, res, next) => {
  // console.log(req.body)
  const user = new User({
    name: req.body.name,
    email: req.body.email
  })
  // if we get the data
  user.save() //it will save the data
    .then(result => {
      console.log(result);
      res.status(200).json({
        newUser: user
      });
    })
    // if get an error
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
});
module.exports = router; //export module
