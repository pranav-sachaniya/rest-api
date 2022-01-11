// connection with server
const http = require('http');

const app = require('./app');
const db = require('./db');

// createserver
const server = http.createServer(app);

// listenserver
server.listen(3000,() => {
  console.log('server running on port 3000')
});
