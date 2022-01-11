// route work
const express = require('express');

const auth = require('../controller/auth'); //import controller

const router = express.Router(); // instance for route

// routing using method
router.get('/gets', auth.getRequest);

// routing using post method 
router.post('/posts', auth.postRequest);

module.exports = router; //export module
