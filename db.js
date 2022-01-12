import con from 'mongoose';

const { connection, connect } = con;

// connect with database
const db = connect('mongodb+srv://sp:sp123@restapi.pzpxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// const db = connect('mongodb://localhost:3000/myFirstDatabase');

// open a connection
connection.once('open', () => {
	console.log('connection has been made');
}).on('error', (err) => {
	console.log('error', err);
});

export default db; // export database
