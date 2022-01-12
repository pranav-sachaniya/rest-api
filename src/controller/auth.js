// import bcrypt from 'bcrypt';
import User from '../models/userModels'; // import schema
import { resError, resStatus } from '../utils/func';

// get request 	now find the user data
export const fetchUserData = async (req, res) => {
	try {
		const user = await User.find();
		return resStatus(req, res, { user });
	} catch (err) {
		return resError(req, res, { err });
	}
};

// get data using id
export const getIdData = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		return resStatus(req, res, { user });
	} catch (err) {
		return resError(req, res, { err });
	}
};

// post request
export const sendUserData = async (req, res) => {
	try {
		const { username,	name, email, password, phone } = req.body; // destructuring of data

		// const hash = await bcrypt.hash(password, 10);
		const user = new User({
			username,
			name,
			email,
			password,
			phone,
		});
		await user.save(); // it will save the data
		// console.log(user);
		return resStatus(req, res, { user });
	} catch (err) {
		return resError(req, res, { err: 'Proccess not done ...' });
	}
};

// delete request
export const delUserData = async (req, res) => {
	try {
		const user = await User.remove({ _id: req.params.id }); // delete data from specific id
		return resStatus(req, res, { user });
	} catch (err) {
		return resError(req, res, { err }); // if caught error
	}
};

// update request
export const updateUserData = async (req, res) => {
	try {
		const user = await User.findOneAndUpdate({ _id: req.params.id }, {
			$set: {
				name: req.body.name,
				email: req.body.email,
			},
		}); // it will take to update
		return resStatus(req, res, { user });
	} catch (err) {
		return resError(req, res, { err });
	}
};
