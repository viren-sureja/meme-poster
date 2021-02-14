const mongoose = require('mongoose');
require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = process.env.dbURI;

MongoClient.connect(url, function (err, db) {
	if (!err) {
		console.log('Database created!');
		var dbo = db.db('mydb');
		dbo.createCollection('memes', function (err, res) {
			if (!err) {
				console.log('Collection created!');
				db.close();
			}
		});
	}
});

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
