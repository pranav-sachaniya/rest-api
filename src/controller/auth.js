import mongoose from 'mongoose';
import User from '../models/userModels'; // import schema
import { resError, resStatus } from '../utils/func';

// get request 	now find the user data
export const getRequest = async (req, res) => {
	try {
		const user = await User.find();
		return resStatus(req,	res, { user });
	} catch (err) {
		return resError(req,	res, { err });
	}
};

// get data using id
export const getIdData = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		return resStatus(req,	res, { user });
	} catch (err) {
		return resError(req,	res, { err });
	}
};

// post request
export const postRequest = async (req, res) => {
	try {
		const user = await new User({
			id: mongoose.Schema.Types.ObjectId,
			name: req.body.name,
			email: req.body.email,
		});
		user.save() // it will save the data
		return resStatus(req,	res, { user });
	} catch (err) {
		return resError(req,	res, { err });
	}
};

// delete request
export const delRequest = async (req, res) => {
	try {
		const user = await User.remove({ _id: req.params.id }); // delete data from specific id
		return resStatus(req,	res, { user });
	} catch (err) {
		return resError(req,	res, { err }); // if caught error
	}
};

// update request
export const updateRequest = async (req, res) => {
	try {
		const user = await User.findOneAndUpdate({ _id: req.params.id }, {
			$set: {
				name: req.body.name,
				email: req.body.email,
			},
		}); // it will take to update
		return resStatus(req,	res, { user });
	} catch (err) {
		return resError(req,	res, { err });
	}
};
