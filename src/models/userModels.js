// create user schema
import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const userSchema = new Schema({
	// feild of schema
	name: String,
	email: String,
});

// convert schema into model
export default model('User', userSchema);
