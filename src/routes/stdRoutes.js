const express = require('express');
const router = express.Router(); //instance of express for router

// route using get method
router.get('/stdgets', (req, res, next) => {
  res.status(200).json({
    message: 'This is get request from std'
  });
});

module.exports = router;