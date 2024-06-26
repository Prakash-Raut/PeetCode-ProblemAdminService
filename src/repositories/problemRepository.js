const { Problem } = require("../models");

class ProblemRepository {
	async createProblem(problemData) {
		try {
            console.log("Problem Repository: ",problemData);

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

	async getProblems() {
		return Problem.find();
	}

	async getProblemById(id) {
		return Problem.findById(id);
	}

	async updateProblem(id, problem) {
		return Problem.findByIdAndUpdate(id, problem, { new: true });
	}

	async deleteProblem(id) {
		return Problem.findByIdAndDelete(id);
	}
}

module.exports = ProblemRepository;
