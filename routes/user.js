const express = require('express');
const router = express.Router();

const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
	getAllUsers,
} = require('../controllers/user');
router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
