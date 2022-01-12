/* eslint-disable brace-style */
/* eslint-disable no-empty */
/* eslint-disable array-callback-return */
import mongoose from 'mongoose';
import User from '../models/userModels'; // import schema

// get request 	now find the user data
export const getRequest = async (req, res) => {
	try {
		// console.log(User);
		const user = await User.find();
		res.status(200).json({ user }); // json
	} catch (err) {
		console.log(err);
		res.status(500).json({
			err,
		}); // catch
	}
};

// get data using id
export const getIdData = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json({
			user,
		});
	} catch (err) {
		res.status(500).json({
			error: err,
		});
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
			.then((result) => {
				console.log(result);
				res.status(200).json({
					newUser: user,
				});
			});
	} catch (err) { // if get an error
		res.status(500).json({
			error: err,
		});
	}
};

// delete request
export const delRequest = async (req, res) => {
	try {
		const user = await User.remove({ _id: req.params.id }); // delete data from specific id
		res.status(200).json({
			message: 'Data deleted successfully',
			user,
		}); // if get data then
	} catch (err) {
		res.status(500).json({
			message: 'Error on deleting data',
			err,
		}); // if caught error
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
		res.status(200).json({
			message: 'Data updated successfully',
			user,
		});
	} // try close
	catch (err) {
		res.status(500).json({
			message: 'Error occure during updation',
			err,
		});
	}
};
