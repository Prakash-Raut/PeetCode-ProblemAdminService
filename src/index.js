const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectDB = require("./config/dbConfig");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.use(errorHandler);

app.get("/ping", (req, res) => {
	return res.json({ message: "pong" });
});

app.listen(PORT, async () => {
	console.log(`Environment: ${process.env.ENVIRONMENT}`);
	console.log(`Server is running on port: ${PORT}`);
	await connectDB();
});
