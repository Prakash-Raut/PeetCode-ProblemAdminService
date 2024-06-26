const mongose = require("mongose");

const problemSchema = new mongose.Schema({
	title: {
		type: String,
		required: [true, "Title cannot be empty"],
	},
	description: {
		type: String,
		required: [true, "Description cannot be empty"],
	},
	difficulty: {
		type: String,
		enum: ["easy", "medium", "hard"],
		required: [true, "Difficulty cannot be empty"],
		default: "easy",
	},
	testCases: [
		{
			input: {
				type: String,
				required: true,
			},
			output: {
				type: String,
				required: true,
			},
		},
	],
	editorial: {
		type: String,
	},
});

const Problem = mongose.model("Problem", problemSchema);

module.exports = Problem;
