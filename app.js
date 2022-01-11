const express = require('express');
const mongoose = require('mongoose');

/* Body-parser is the Node.js body parsing middleware. 
It is responsible for parsing the incoming request bodies in a middleware before you handle it. */
const bodyParser = require('body-parser');

const route = require('./src/routes/routes');
const stdroute = require('./src/routes/stdRoutes');
const { urlencoded } = require('body-parser');

const app = express(); //instance of express

// use of body-parser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json()); //it will receive json file

// set base of route
app.use('/', route); // this is middleware
app.use('/', stdroute);

// middleware start
app.use((req, res, next) => {
  res.status(200).json({
    message: "App is running now"
  });
});

module.exports = app; // export the module
