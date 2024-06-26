const express = require("express");

const problemRouter = require("./problemRoutes");

const v1Router = express.Router();

v1Router.use("/problems", problemRouter);

module.exports = v1Router;
