require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connect,js');
const app = express();
const port = 3000;

const userRouter = require('./routes/user');
app.use(express.json());
app.use('/api', userRouter);

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`App is listening on port ${port}!`),
		);
	} catch (error) {
		console.log(error);
	}
};
start();
