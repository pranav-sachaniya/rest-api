const { Schema } = require('mongoose');
const User = require('../models/userModels'); //import schema

// get request
const getRequest = ((req, res) => {
  /* res.status(200).json({
    message: 'This is get request'
  }); */

  // now find the user data
  User.find() //it will find all the datafrom database
    .then(result => {
      res.status(200).json({
        result //give store result data into userData
      });
    }) //if we find the data
    .catch(err => {
      res.status(500).json({
        err
      });
    }); //if get an error
});

// get data using id
const getIdData = ((req, res) => {
  User.findById(req.params.id) //if want to find data using id 
    .then(result => {
      res.status(200).json({
        result
      })
        .catch(err => {
          res.status(500).json({
            error: err
          })
        })
    })
});

// post request 
const postRequest = ((req, res) => {
  // console.log(req.body)
  const user = new User({
    id: Schema.Types.ObjectId,
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
        error: err
      });
    });
});

// delete request
const delRequest = ((req, res) => {
  User.remove({ _id: req.params.id }) // delete data from specific id
    .then(result => {
      res.status(200).json({
        message: 'Data deleted successfully',
        result
      }) // if get data then 
        .catch(err => {
          res.status(500).json({
            message: 'Error on deleting data',
            err
          }) // if caught error
        });
    });
});

// update request 
const updateRequest = ((req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, {
    $set: {
      name: req.body.name,
      email: req.body.email
    }
  }) //it will take to update
    .then(result => {
      res.status(200).json({
        message: 'Data updated successfully',
        result
      }) //if get data
        .catch(err => {
          message: 'Error occure while updaing data',
            err
        });
    });
});


module.exports = { getRequest, getIdData, postRequest, delRequest, updateRequest };
