var express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Meme = require('./models/memes');

// express app
var app = express();

// desired && free port no.
const port = 8000;

// connect to database
mongoose
	.connect('mongodb://localhost:27017/xmeme', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		app.listen(port, () => console.log(`app is running on ${port}...:)`));
	})
	.catch((err) => console.log(err));

// register engine
app.set('view engine', 'ejs');

// middleware and static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes

// index page with all memes being displayed
app.get('/memes', (req, res) => {
	Meme.find()
		.sort({ updatedAt: -1 })
		.then((result) =>
			res.render('index', {
				memes: result,
			})
		)
		.catch((err) => console.log(err));
});

// to add meme to db through form
app.post('/memes', (req, res) => {
	const meme = new Meme(req.body);

	// saving the blog.
	meme
		.save()
		.then((result) => {
			res.redirect('/memes');
		})
		.catch((err) => {
			console.log(err);
		});
});

// to return json data about the demanded meme
app.get('/memes/:id', (req, res) => {
	// find meme and return json data and, if doesn't exist return 404
	const id = req.params.id;

	Meme.findById(id)
		.then((result) => {
			// res.render('blogs/details', { blog: result, title: 'Blog details' });
			res.send(result);
		})
		.catch((err) => {
			// res.render('404', { title: 'blog not found' });
			res.status(404);
		});
});

// to edit/update the meme
app.post('/memes/:id', (req, res) => {
	// find meme and return json data and, if doesn't exist return 404
	const id = req.params.id;
	console.log(id);
	// Meme.findOneAndUpdate({ _id: id }, req.body, () => {})
	// 	.then((result) => {
	// 		// res.render('blogs/details', { blog: result, title: 'Blog details' });
	// 		res.render('index', { memes: result });
	// 	})
	// 	.catch((err) => {
	// 		// res.render('404', { title: 'blog not found' });
	// 		// res.status(404);
	// 		console.log('404', err);
	// 	});
});
