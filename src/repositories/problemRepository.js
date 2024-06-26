const NotFound = require("../errors/notFound");
const { Problem } = require("../models");

class ProblemRepository {
	async createProblem(problemData) {
		try {
			console.log("Problem Repository: ", problemData);

			const problem = await Problem.create({
				title: problemData.title,
				description: problemData.description,
				testCases: problemData.testCases ? problemData.testCases : [],
			});

			return problem;
		} catch (error) {
			console.log("Error in Problem Repository: ", error);
			throw error;
		}
	}

	async getAllProblems() {
		try {
			const problems = await Problem.find({});
			return problems;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getProblem(id) {
		try {
			const problem = await Problem.findById(id);
			if (!problem) {
				throw new NotFound("Problem", id);
			}
			return problem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async deleteProblem(id) {
		try {
			const deletedProblem = await Problem.findByIdAndDelete(id);
			if (!deletedProblem) {
				throw new NotFound("problem", id);
			}
			return deletedProblem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = ProblemRepository;
