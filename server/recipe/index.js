const fs = require('fs');
const path = require('path');
const request = require('request');

const MAX_CALLS = 25;

const baseOptions = {
	baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com',
	headers: {
		'X-Mashape-Key': '',
		'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
	},
};

let currData = {
	calls: 0,
	date: 0
};

module.exports = function(app) {

	app.use(function(req, res, next) {

		let currDate = new Date().getDate();
		if (currDate !== currData.date) {
			currData.date = currDate;
			currData.calls = 0;
		}

		++currData.calls;
		req.limitReached = currData.calls > MAX_CALLS;

		next();
	});

	app.get('/api/1.0/recipe/search', function(req, res) {
		let getStatic = () => {
			let recipes = require(path.join(__dirname, 'static/list.json')).recipes;
			res.status(500).json({
				results: recipes,
				number: recipes.length
			});
		};

		if (req.limitReached) {
			getStatic();
			return;
		}

		let options = JSON.parse(JSON.stringify(baseOptions));
		options.url = '/recipes/search';
		options.method = 'GET';
		options.qs = req.query;

		request(options, function(err, response, body) {
			if (response.statusCode < 200 || response.statusCode >= 300) {
				getStatic();
				return;
			}

			res.status(500).send();
		});
	});

	app.get('/api/1.0/recipe/:id', function(req, res) {
		let getStatic = () => {
			let recipesDir = path.join(__dirname, 'static');
			let recipePath = path.join(recipesDir, req.params.id);
			if (!fs.existsSync(recipePath)) {
				let randInt = function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min)) + min;
				};

				let recipesList = fs.readdirSync(recipesDir);

				recipePath = path.join(recipesDir, recipesList[randInt(0, recipesList.length)]);
			}

			res.status(500).json(require(recipePath));
		};

		if (req.limitReached) {
			getStatic();
			return;
		}

		let options = JSON.parse(JSON.stringify(baseOptions));
		options.url = '/recipes/' + req.params.id + '/information';
		options.method = 'GET';
		options.qs = {
			includeNutrition: true
		};

		request(options, function(err, response, body) {
			if (response.statusCode < 200 || response.statusCode >= 300) {
				getStatic();
				return;
			}

			res.status(500).send();
		});
	});

};