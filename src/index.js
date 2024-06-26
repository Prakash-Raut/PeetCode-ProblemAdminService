const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get("/ping", (req, res) => {
	return res.json({ message: "pong" });
});

app.listen(PORT, () => {
	console.log(`Environment: ${process.env.ENVIRONMENT}`)
	console.log(`Server is running on port: ${PORT}`);
});
