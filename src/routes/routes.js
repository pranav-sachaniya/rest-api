// route work
const express = require('express');

const auth = require('../controller/auth'); //import controller

const router = express.Router(); // instance for route

// routing using method
router.get('/gets', auth.getRequest);

// get data by id
router.get('/gets/:id', auth.getIdData);

// routing using post method 
router.post('/posts', auth.postRequest);

// routing for delete request
router.delete('/del/:id', auth.delRequest);

module.exports = router; //export module
