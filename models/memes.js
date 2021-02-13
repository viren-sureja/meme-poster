const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the structure of our db.
const memeSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		caption: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// model declaration
const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
