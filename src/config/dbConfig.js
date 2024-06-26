const mongoose = require("mongoose");
const { ENVIRONMENT, MONGO_URI, DB_NAME } = require("./serverConfig");

async function connectDB() {
	try {
		if (ENVIRONMENT == "development") {
			await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
			console.log("Database Connected Successfully !");
		}
	} catch (error) {
		console.error("Error in connecting to Database:", error);
		process.exit(1);
	}
}

module.exports = connectDB;
