/* eslint-disable no-undef */
import express from 'express';

import chalk from 'chalk';

import bodyParser from 'body-parser';

import route from './src/routes/routes';

// eslint-disable-next-line no-unused-vars
import db from './db';

const app = express(); // instance of express

// use of body-parser
const { json, urlencoded } = bodyParser; // this is called dstrucring of code
app.use(urlencoded({ extended: false }));
app.use(json()); // it will receive json file

// set base of route
app.use('/', route); // this is middleware

// listenserver
app.listen(3000, () => {
	console.log(chalk.bgGray('server running on port 3000'));
});
