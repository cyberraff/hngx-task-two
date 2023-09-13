const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const createUser = async (req, res) => {
	const user = await User.create({ ...req.body });
	res.status(StatusCodes.OK).json({
		userId: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		city: user.city,
		country: user.country,
	});
};
const getAllUsers = async (req, res) => {
	const users = await User.find();
	res.status(StatusCodes.OK).json({ users });
};
const getUser = async (req, res, next) => {
	const { id: userId } = req.params;
	const user = await User.findOne({ _id: userId });
	if (!user) {
		return res
			.status(StatusCodes.NOT_FOUND)
			.json({ msg: `no user with id: ${userId}` });
	}
	res.status(StatusCodes.OK).json({ user });
};
const updateUser = async (req, res) => {
	const { id: userId } = req.params;
	const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!user) {
		return res
			.status(StatusCodes.NOT_FOUND)
			.json({ msg: `no user with id: ${userId}` });
	}
	res.status(StatusCodes.OK).json({ user });
};
const deleteUser = async (req, res) => {
	const { id: userId } = req.params;
	const user = await User.findOneAndDelete({ _id: userId });
	if (!userId) {
		return res
			.status(StatusCodes.NOT_FOUND)
			.json({ msg: `no user with id: ${userId}` });
	}
	res.status(StatusCodes.OK).json({
		msg: `User with id: ${userId} has been successfully deleted`,
	});
};

module.exports = {
	getAllUsers,
	createUser,
	getUser,
	updateUser,
	deleteUser,
};
