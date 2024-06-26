const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: process.env.PORT || 3000,
	ENVIRONMENT: process.env.ENVIRONMENT || "development",
	MONGO_URI: process.env.MONGO_URI,
};
