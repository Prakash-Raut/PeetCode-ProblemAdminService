const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
	constructor(problemRepository) {
		this.problemRepository = problemRepository;
	}

	async createProblem(problemData) {
		try {
			problemData.description = sanitizeMarkdown(problemData.description);
			console.log("Creating a new problem");
			console.log("Problem Data: ", problemData);
            console.log(this.problemRepository.createProblem);
			const problem = await this.problemRepository.createProblem(
				problemData
			);
			console.log("Problem Created: ", problem);
			return problem;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ProblemService;
