const mongoose = require("mongoose");
const { ENVIRONMENT, MONGO_URI } = require("./serverConfig");

async function connectDB() {
	try {
		if (ENVIRONMENT == "development") {
			await mongoose.connect(MONGO_URI);
			console.log("Database Connected Successfully !");
		}
	} catch (error) {
		console.error("Error in connecting to Database:", error);
		process.exit(1);
	}
}

module.exports = connectDB;
