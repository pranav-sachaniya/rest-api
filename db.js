const mongoose = require('mongoose');

// connect with database
const db = mongoose.connect('mongodb+srv://sp:sp123@restapi.pzpxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// open a connection 
mongoose.connection.once('open', () => {
  console.log('connection has been made');
}).on('error', (err) => {
  console.log('error', err);
});

module.exports = db; //export database
