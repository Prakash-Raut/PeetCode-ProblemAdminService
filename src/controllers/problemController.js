const { problemRepository } = require("../repositories");
const { problemService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const service = new problemService(new problemRepository());

async function pingProblemController(req, res) {
	return res.json({ message: "Problem controller is up" });
}

async function addProblem(req, res, next) {
	try {
		console.log("Request Body", req.body);

		const createdProblem = await service.createProblem(req.body);

		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "New Problem created successfully",
			data: createdProblem,
		});
	} catch (error) {
		next(error);
	}
}

async function getProblems(req, res, next) {
	try {
		const response = await service.getAllProblems();
		console.log(response);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "Successfully fetched all the problems",
			data: response,
		});
	} catch (error) {
		next(error);
	}
}

async function getProblem(req, res, next) {
	try {
		const problem = await service.getProblem(req.params.id);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "Successfully fetched a problem",
			data: problem,
		});
	} catch (error) {
		next(error);
	}
}

async function deleteProblem(req, res) {}

async function updateProblem(req, res) {}

module.exports = {
	addProblem,
	getProblem,
	getProblems,
	deleteProblem,
	updateProblem,
	pingProblemController,
};
