// create user schema
const mongoose = require('mongoose');

const schema = mongoose.Schema; // schema created

const userSchme = new schema({
  // feild of schema
  name:String,
  email:String
});

// convert schema into model
const userModel = mongoose.model('User',userSchme);
module.exports = userModel;
