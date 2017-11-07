import resources from './page_message.json';
import globalResources from '../../global/page_message.json';

import Actionbar from '../../components/actionbar/index';

import React from 'react';
import { Container, Grid, Header, List, Loader, Statistic } from 'semantic-ui-react';

export default class Compare extends React.Component {

	componentWillMount() {
		[this.props.match.params.id1, this.props.match.params.id2].forEach(recipeId => {
			// let xhr = new XMLHttpRequest();

			// xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/information?includeNutrition=true');
			// xhr.setRequestHeader("X-Mashape-Key", process.env.API_KEY);
			// xhr.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com");
			// xhr.onload = () => {
			//	let recipeInfo = JSON.parse(xhr.response);
				let recipeInfo = {"vegetarian":true,"vegan":false,"glutenFree":true,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":true,"sustainable":false,"weightWatcherSmartPoints":39,"gaps":"no","lowFodmap":false,"ketogenic":false,"whole30":false,"servings":1,"preparationMinutes":10,"cookingMinutes":0,"sourceUrl":"http://www.perrysplate.com/2012/04/herb-butter-coins-for-roasted-chicken.html","spoonacularSourceUrl":"https://spoonacular.com/herb-butter-coins-for-roasted-chicken-556816","aggregateLikes":397,"spoonacularScore":89,"healthScore":19,"creditText":"Perrys Plate","sourceName":"Perrys Plate","pricePerServing":388.81,"extendedIngredients":[{"id":1002030,"aisle":"Spices and Seasonings","image":"https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg","consistency":"solid","name":"black pepper","amount":0.25,"unit":"teaspoon","unitShort":"tsp","unitLong":"teaspoons","originalString":"1/4 teaspoon black pepper","metaInformation":["black"]},{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg","consistency":"solid","name":"butter","amount":6,"unit":"Tablespoons","unitShort":"Tbsp","unitLong":"Tablespoons","originalString":"6 Tablespoons butter, room temperature","metaInformation":["room temperature"]},{"id":1012024,"aisle":"Produce","image":"https://spoonacular.com/cdn/ingredients_100x100/mixed-fresh-herbs.jpg","consistency":"solid","name":"fresh herbs","amount":4,"unit":"Tablespoons","unitShort":"Tbsp","unitLong":"Tablespoons","originalString":"4 Tablespoons fresh herbs (I used mostly fresh sage and 1/2 tsp dried thyme)","metaInformation":["dried","fresh","(I used mostly sage and 1/2 tsp thyme)"]},{"id":11215,"aisle":"Produce","image":"https://spoonacular.com/cdn/ingredients_100x100/garlic-roasted.jpg","consistency":"solid","name":"garlic","amount":3,"unit":"cloves","unitShort":"cloves","unitLong":"cloves","originalString":"3 cloves garlic, minced","metaInformation":["minced"]},{"id":9156,"aisle":"Produce","image":"https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg","consistency":"solid","name":"lemon zest","amount":2,"unit":"teaspoons","unitShort":"tsp","unitLong":"teaspoons","originalString":"zest from 1 lemon (about 2 teaspoons)","metaInformation":[]},{"id":2047,"aisle":"Spices and Seasonings","image":"https://spoonacular.com/cdn/ingredients_100x100/salt.jpg","consistency":"solid","name":"salt","amount":0.5,"unit":"teaspoon","unitShort":"tsp","unitLong":"teaspoons","originalString":"1/2 teaspoon salt","metaInformation":[]},{"id":11677,"aisle":"Produce","image":"https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg","consistency":"solid","name":"shallot","amount":1,"unit":"","unitShort":"","unitLong":"","originalString":"1 shallot, chopped small","metaInformation":["small","chopped"]}],"id":556816,"title":"Herb Butter \"Coins\" for Roasted Chicken","readyInMinutes":10,"image":"https://spoonacular.com/recipeImages/556816-556x370.jpg","imageType":"jpg","nutrition":{"nutrients":[{"title":"Calories","amount":937.29,"unit":"cal","percentOfDailyNeeds":46.86},{"title":"Fat","amount":89.67,"unit":"g","percentOfDailyNeeds":137.95},{"title":"Saturated Fat","amount":44.35,"unit":"g","percentOfDailyNeeds":277.16},{"title":"Carbohydrates","amount":24.8,"unit":"g","percentOfDailyNeeds":8.27},{"title":"Sugar","amount":6.29,"unit":"g","percentOfDailyNeeds":6.99},{"title":"Cholesterol","amount":180.6,"unit":"mg","percentOfDailyNeeds":60.2},{"title":"Sodium","amount":1775.06,"unit":"mg","percentOfDailyNeeds":77.18},{"title":"Protein","amount":17.45,"unit":"g","percentOfDailyNeeds":34.9},{"title":"Selenium","amount":125.56,"unit":"µg","percentOfDailyNeeds":179.37},{"title":"Manganese","amount":1.74,"unit":"mg","percentOfDailyNeeds":86.91},{"title":"Magnesium","amount":229.51,"unit":"mg","percentOfDailyNeeds":57.38},{"title":"Phosphorus","amount":539.94,"unit":"mg","percentOfDailyNeeds":53.99},{"title":"Vitamin A","amount":2124.04,"unit":"IU","percentOfDailyNeeds":42.48},{"title":"Fiber","amount":8.76,"unit":"g","percentOfDailyNeeds":35.02},{"title":"Vitamin B1","amount":0.52,"unit":"mg","percentOfDailyNeeds":34.42},{"title":"Iron","amount":6.01,"unit":"mg","percentOfDailyNeeds":33.38},{"title":"Vitamin E","amount":4.98,"unit":"mg","percentOfDailyNeeds":33.2},{"title":"Folate","amount":107.71,"unit":"µg","percentOfDailyNeeds":26.93},{"title":"Zinc","amount":3.9,"unit":"mg","percentOfDailyNeeds":25.97},{"title":"Vitamin B6","amount":0.44,"unit":"mg","percentOfDailyNeeds":22.15},{"title":"Copper","amount":0.44,"unit":"mg","percentOfDailyNeeds":22.08},{"title":"Calcium","amount":211.33,"unit":"mg","percentOfDailyNeeds":21.13},{"title":"Vitamin C","amount":14.17,"unit":"mg","percentOfDailyNeeds":17.17},{"title":"Potassium","amount":589.54,"unit":"mg","percentOfDailyNeeds":16.84},{"title":"Vitamin B3","amount":2.97,"unit":"mg","percentOfDailyNeeds":14.85},{"title":"Vitamin B2","amount":0.2,"unit":"mg","percentOfDailyNeeds":11.88},{"title":"Vitamin K","amount":10.25,"unit":"µg","percentOfDailyNeeds":9.76},{"title":"Vitamin D","amount":1.26,"unit":"µg","percentOfDailyNeeds":8.4},{"title":"Vitamin B5","amount":0.72,"unit":"mg","percentOfDailyNeeds":7.17},{"title":"Vitamin B12","amount":0.14,"unit":"µg","percentOfDailyNeeds":2.38}],"ingredients":[{"name":"black pepper","amount":0.25,"unit":"teaspoon","nutrients":[{"name":"Sodium","amount":0.1,"unit":"mg"},{"name":"Vitamin B1","amount":0,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":6.65,"unit":"mg"},{"name":"Vitamin E","amount":0.01,"unit":"mg"},{"name":"Fluoride","amount":0.17,"unit":"mg"},{"name":"Vitamin K","amount":0.82,"unit":"µg"},{"name":"Fat","amount":0.02,"unit":"g"},{"name":"Carbohydrates","amount":0.32,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":0.02,"unit":"µg"},{"name":"Vitamin A","amount":2.74,"unit":"IU"},{"name":"Manganese","amount":0.06,"unit":"mg"},{"name":"Phosphorus","amount":0.79,"unit":"mg"},{"name":"Calcium","amount":2.22,"unit":"mg"},{"name":"Folate","amount":0.09,"unit":"µg"},{"name":"Iron","amount":0.05,"unit":"mg"},{"name":"Trans Fat","amount":0,"unit":"g"},{"name":"Calories","amount":1.25,"unit":"cal"},{"name":"Sugar","amount":0,"unit":"g"},{"name":"Fiber","amount":0.13,"unit":"g"},{"name":"Vitamin B6","amount":0,"unit":"mg"},{"name":"Copper","amount":0.01,"unit":"mg"},{"name":"Choline","amount":0.06,"unit":"mg"},{"name":"Vitamin B5","amount":0.01,"unit":"mg"},{"name":"Saturated Fat","amount":0.01,"unit":"g"},{"name":"Vitamin B2","amount":0,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0,"unit":"g"},{"name":"Zinc","amount":0.01,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":0.05,"unit":"g"},{"name":"Vitamin C","amount":0,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0.01,"unit":"mg"},{"name":"Magnesium","amount":0.86,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":0,"unit":"g"}]},{"name":"butter","amount":6,"unit":"Tablespoons","nutrients":[{"name":"Sodium","amount":599.76,"unit":"mg"},{"name":"Vitamin B1","amount":0,"unit":"mg"},{"name":"Cholesterol","amount":180.6,"unit":"mg"},{"name":"Potassium","amount":20.16,"unit":"mg"},{"name":"Vitamin E","amount":1.95,"unit":"mg"},{"name":"Fluoride","amount":2.35,"unit":"mg"},{"name":"Vitamin K","amount":5.88,"unit":"µg"},{"name":"Fat","amount":68.13,"unit":"g"},{"name":"Carbohydrates","amount":0.05,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":0.84,"unit":"µg"},{"name":"Vitamin A","amount":2099.16,"unit":"IU"},{"name":"Manganese","amount":0,"unit":"mg"},{"name":"Phosphorus","amount":20.16,"unit":"mg"},{"name":"Calcium","amount":20.16,"unit":"mg"},{"name":"Folate","amount":2.52,"unit":"µg"},{"name":"Iron","amount":0.02,"unit":"mg"},{"name":"Trans Fat","amount":2.75,"unit":"g"},{"name":"Calories","amount":602.28,"unit":"cal"},{"name":"Sugar","amount":0.05,"unit":"g"},{"name":"Fiber","amount":0,"unit":"g"},{"name":"Vitamin B6","amount":0,"unit":"mg"},{"name":"Copper","amount":0,"unit":"mg"},{"name":"Choline","amount":15.79,"unit":"mg"},{"name":"Vitamin B5","amount":0.09,"unit":"mg"},{"name":"Saturated Fat","amount":43.15,"unit":"g"},{"name":"Vitamin B2","amount":0.03,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":17.66,"unit":"g"},{"name":"Zinc","amount":0.08,"unit":"mg"},{"name":"Vitamin D","amount":1.26,"unit":"µg"},{"name":"Protein","amount":0.71,"unit":"g"},{"name":"Vitamin C","amount":0,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0.04,"unit":"mg"},{"name":"Magnesium","amount":1.68,"unit":"mg"},{"name":"Vitamin B12","amount":0.14,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":2.56,"unit":"g"}]},{"name":"fresh herbs","amount":4,"unit":"Tablespoons","nutrients":[{"name":"Sodium","amount":7.69,"unit":"mg"},{"name":"Vitamin B1","amount":0.48,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":436.5,"unit":"mg"},{"name":"Vitamin E","amount":3,"unit":"mg"},{"name":"Vitamin K","amount":3.19,"unit":"µg"},{"name":"Fat","amount":21.43,"unit":"g"},{"name":"Carbohydrates","amount":16.61,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":123.08,"unit":"µg"},{"name":"Vitamin A","amount":18.34,"unit":"IU"},{"name":"Manganese","amount":1.45,"unit":"mg"},{"name":"Phosphorus","amount":489.74,"unit":"mg"},{"name":"Calcium","amount":157.33,"unit":"mg"},{"name":"Folate","amount":95.82,"unit":"µg"},{"name":"Iron","amount":5.45,"unit":"mg"},{"name":"Trans Fat","amount":0,"unit":"g"},{"name":"Calories","amount":300.47,"unit":"cal"},{"name":"Sugar","amount":4.02,"unit":"g"},{"name":"Fiber","amount":7.22,"unit":"g"},{"name":"Vitamin B6","amount":0.23,"unit":"mg"},{"name":"Copper","amount":0.38,"unit":"mg"},{"name":"Choline","amount":72.57,"unit":"mg"},{"name":"Vitamin B5","amount":0.48,"unit":"mg"},{"name":"Saturated Fat","amount":1.18,"unit":"g"},{"name":"Vitamin B2","amount":0.15,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":13.32,"unit":"g"},{"name":"Zinc","amount":3.6,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":15.43,"unit":"g"},{"name":"Vitamin C","amount":4.2,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":2.8,"unit":"mg"},{"name":"Magnesium","amount":218.84,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":5.97,"unit":"g"}]},{"name":"garlic","amount":3,"unit":"cloves","nutrients":[{"name":"Sodium","amount":1.53,"unit":"mg"},{"name":"Vitamin B1","amount":0.02,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":36.09,"unit":"mg"},{"name":"Vitamin E","amount":0.01,"unit":"mg"},{"name":"Vitamin K","amount":0.15,"unit":"µg"},{"name":"Fat","amount":0.05,"unit":"g"},{"name":"Carbohydrates","amount":2.98,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":1.28,"unit":"µg"},{"name":"Vitamin A","amount":0.81,"unit":"IU"},{"name":"Manganese","amount":0.15,"unit":"mg"},{"name":"Phosphorus","amount":13.77,"unit":"mg"},{"name":"Calcium","amount":16.29,"unit":"mg"},{"name":"Folate","amount":0.27,"unit":"µg"},{"name":"Iron","amount":0.15,"unit":"mg"},{"name":"Calories","amount":13.41,"unit":"cal"},{"name":"Sugar","amount":0.09,"unit":"g"},{"name":"Fiber","amount":0.19,"unit":"g"},{"name":"Vitamin B6","amount":0.11,"unit":"mg"},{"name":"Copper","amount":0.03,"unit":"mg"},{"name":"Choline","amount":2.09,"unit":"mg"},{"name":"Vitamin B5","amount":0.05,"unit":"mg"},{"name":"Saturated Fat","amount":0.01,"unit":"g"},{"name":"Vitamin B2","amount":0.01,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0,"unit":"g"},{"name":"Zinc","amount":0.1,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":0.57,"unit":"g"},{"name":"Vitamin C","amount":2.81,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0.06,"unit":"mg"},{"name":"Magnesium","amount":2.25,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":0.02,"unit":"g"}]},{"name":"lemon zest","amount":2,"unit":"teaspoons","nutrients":[{"name":"Sodium","amount":0.24,"unit":"mg"},{"name":"Vitamin B1","amount":0,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":6.4,"unit":"mg"},{"name":"Vitamin E","amount":0.01,"unit":"mg"},{"name":"Vitamin K","amount":0,"unit":"µg"},{"name":"Fat","amount":0.01,"unit":"g"},{"name":"Carbohydrates","amount":0.64,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":0.03,"unit":"µg"},{"name":"Vitamin A","amount":2,"unit":"IU"},{"name":"Phosphorus","amount":0.48,"unit":"mg"},{"name":"Calcium","amount":5.36,"unit":"mg"},{"name":"Folate","amount":0.52,"unit":"µg"},{"name":"Iron","amount":0.03,"unit":"mg"},{"name":"Calories","amount":1.88,"unit":"cal"},{"name":"Sugar","amount":0.17,"unit":"g"},{"name":"Fiber","amount":0.42,"unit":"g"},{"name":"Vitamin B6","amount":0.01,"unit":"mg"},{"name":"Copper","amount":0,"unit":"mg"},{"name":"Choline","amount":0.34,"unit":"mg"},{"name":"Vitamin B5","amount":0.01,"unit":"mg"},{"name":"Saturated Fat","amount":0,"unit":"g"},{"name":"Vitamin B2","amount":0,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0,"unit":"g"},{"name":"Zinc","amount":0.01,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":0.06,"unit":"g"},{"name":"Vitamin C","amount":5.16,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0.02,"unit":"mg"},{"name":"Magnesium","amount":0.6,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":0,"unit":"g"}]},{"name":"salt","amount":0.5,"unit":"teaspoon","nutrients":[{"name":"Sodium","amount":1162.74,"unit":"mg"},{"name":"Vitamin B1","amount":0,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":0.24,"unit":"mg"},{"name":"Vitamin E","amount":0,"unit":"mg"},{"name":"Fluoride","amount":0.06,"unit":"mg"},{"name":"Vitamin K","amount":0,"unit":"µg"},{"name":"Fat","amount":0,"unit":"g"},{"name":"Carbohydrates","amount":0,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":0,"unit":"µg"},{"name":"Vitamin A","amount":0,"unit":"IU"},{"name":"Manganese","amount":0,"unit":"mg"},{"name":"Phosphorus","amount":0,"unit":"mg"},{"name":"Calcium","amount":0.72,"unit":"mg"},{"name":"Folate","amount":0,"unit":"µg"},{"name":"Iron","amount":0.01,"unit":"mg"},{"name":"Calories","amount":0,"unit":"cal"},{"name":"Sugar","amount":0,"unit":"g"},{"name":"Fiber","amount":0,"unit":"g"},{"name":"Vitamin B6","amount":0,"unit":"mg"},{"name":"Copper","amount":0,"unit":"mg"},{"name":"Choline","amount":0,"unit":"mg"},{"name":"Vitamin B5","amount":0,"unit":"mg"},{"name":"Saturated Fat","amount":0,"unit":"g"},{"name":"Vitamin B2","amount":0,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0,"unit":"g"},{"name":"Zinc","amount":0,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":0,"unit":"g"},{"name":"Vitamin C","amount":0,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0,"unit":"mg"},{"name":"Magnesium","amount":0.03,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":0,"unit":"g"}]},{"name":"shallot","amount":1,"unit":"","nutrients":[{"name":"Sodium","amount":3,"unit":"mg"},{"name":"Vitamin B1","amount":0.02,"unit":"mg"},{"name":"Cholesterol","amount":0,"unit":"mg"},{"name":"Potassium","amount":83.5,"unit":"mg"},{"name":"Vitamin E","amount":0.01,"unit":"mg"},{"name":"Vitamin K","amount":0.2,"unit":"µg"},{"name":"Fat","amount":0.03,"unit":"g"},{"name":"Carbohydrates","amount":4.2,"unit":"g"},{"name":"Caffeine","amount":0,"unit":"mg"},{"name":"Folic Acid","amount":0,"unit":"µg"},{"name":"Selenium","amount":0.3,"unit":"µg"},{"name":"Vitamin A","amount":1,"unit":"IU"},{"name":"Manganese","amount":0.07,"unit":"mg"},{"name":"Phosphorus","amount":15,"unit":"mg"},{"name":"Calcium","amount":9.25,"unit":"mg"},{"name":"Folate","amount":8.5,"unit":"µg"},{"name":"Iron","amount":0.3,"unit":"mg"},{"name":"Calories","amount":18,"unit":"cal"},{"name":"Sugar","amount":1.97,"unit":"g"},{"name":"Fiber","amount":0.8,"unit":"g"},{"name":"Vitamin B6","amount":0.09,"unit":"mg"},{"name":"Copper","amount":0.02,"unit":"mg"},{"name":"Choline","amount":2.83,"unit":"mg"},{"name":"Vitamin B5","amount":0.07,"unit":"mg"},{"name":"Saturated Fat","amount":0,"unit":"g"},{"name":"Vitamin B2","amount":0.01,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0,"unit":"g"},{"name":"Zinc","amount":0.1,"unit":"mg"},{"name":"Vitamin D","amount":0,"unit":"µg"},{"name":"Protein","amount":0.63,"unit":"g"},{"name":"Vitamin C","amount":2,"unit":"mg"},{"name":"Alcohol","amount":0,"unit":"g"},{"name":"Vitamin B3","amount":0.05,"unit":"mg"},{"name":"Magnesium","amount":5.25,"unit":"mg"},{"name":"Vitamin B12","amount":0,"unit":"µg"},{"name":"Poly Unsaturated Fat","amount":0.01,"unit":"g"}]}],"caloricBreakdown":{"percentProtein":7.15,"percentFat":82.68,"percentCarbs":10.17}},"cuisines":[],"dishTypes":["lunch","main course","main dish","dinner"],"diets":["gluten free","lacto ovo vegetarian","primal"],"occasions":[],"winePairing":{"pairedWines":["chardonnay","pinot noir","sauvignon blanc"],"pairingText":"Roasted Chicken works really well with Chardonnay, Pinot Noir, and Sauvignon Blanc. White meat is typically paired with white wine as to not overpower the flavor of the meat, so chardonnay and sauvignon blanc are safe choices. Chicken prepared with a tomato sauce or certainly a red wine sauce can and should be served with a red like a pinot noir. You could try District 7 Estate Chardonnay. Reviewers quite like it with a 5 out of 5 star rating and a price of about 18 dollars per bottle.","productMatches":[{"id":430702,"title":"District 7 Estate Chardonnay","description":"Our 2012 vintage has aromas of tropical fruit and butterscotch that lead into a lively blend of pear, pineapple and citrus flavors","price":"$17.99","imageUrl":"https://spoonacular.com/productImages/430702-312x231.jpg","averageRating":1,"ratingCount":1,"score":0.75,"link":"https://www.amazon.com/District-Monterey-Estate-Chardonnay-White/dp/B01EXEX4P6?tag=spoonacular-20"}]},"instructions":"Blend all ingredients into a small bowl. Transfer herb butter to the middle of a large piece of wax paper. Fold the top end of the wax paper over the butter and, using a spatula or dough scraper, press the top layer of wax paper away from you as you pull the bottom layer of wax paper toward you. (If this sounds confusing, see photos in the post.) The butter should form itself into a cylinder. Twist the ends to close. If you're using it the same day, simply put it in the freezer until firm. For long term storage, wrap the whole thing in aluminum foil and freeze. Should keep a few months in the freezer. To use, unwrap butter and slice into 1/2-inch \"coins\" and place under the skin in the chicken (breast, thigh, and leg areas.) If you have extra and plan on roasting vegetables, just toss them into the pan with the vegetables.Other ideas to flavor butter:different citrus zest (lime, orange, grapefruit)prepared pesto (basil, sun-dried tomato)spice blends (Mexican, Indian, Middle-Eastern)Asian flavors (soy sauce, ginger, sriracha)","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Blend all ingredients into a small bowl.","ingredients":[],"equipment":[{"id":404783,"name":"bowl","image":"https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"}]},{"number":2,"step":"Transfer herb butter to the middle of a large piece of wax paper. Fold the top end of the wax paper over the butter and, using a spatula or dough scraper, press the top layer of wax paper away from you as you pull the bottom layer of wax paper toward you. (If this sounds confusing, see photos in the post.) The butter should form itself into a cylinder. Twist the ends to close. If you're using it the same day, simply put it in the freezer until firm. For long term storage, wrap the whole thing in aluminum foil and freeze. Should keep a few months in the freezer. To use, unwrap butter and slice into 1/2-inch \"coins\" and place under the skin in the chicken (breast, thigh, and leg areas.) If you have extra and plan on roasting vegetables, just toss them into the pan with the vegetables.Other ideas to flavor butter:different citrus zest (lime, orange, grapefruit)prepared pesto (basil, sun-dried tomato)spice blends (Mexican, Indian, Middle-Eastern)Asian flavors (soy sauce, ginger, sriracha)","ingredients":[{"id":1001,"name":"butter","image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"}],"equipment":[{"id":404765,"name":"aluminum foil","image":"https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"},{"id":404649,"name":"dough scraper","image":"https://spoonacular.com/cdn/equipment_100x100/dough-scraper.jpg"},{"id":404739,"name":"wax paper","image":"https://spoonacular.com/cdn/ingredients_100x100/wax-paper.jpg"},{"id":404642,"name":"spatula","image":"https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"},{"id":404645,"name":"frying pan","image":"https://spoonacular.com/cdn/equipment_100x100/pan.png"}]}]}]};

				let stateUpdate = {};
				stateUpdate[recipeId] = {
					name: recipeInfo.title,
					ingredients: recipeInfo.extendedIngredients.map(ingredient => [ingredient.amount, ingredient.unitLong, ingredient.name].join(' ')),
					health: recipeInfo.nutrition.nutrients.reduce((health, nutrient) => {
						health[nutrient.title] = [nutrient.amount, nutrient.unit].join(' ');
						return health;
					}, {})
				};

				this.setState(stateUpdate);
		//	};

		//	xhr.send();
		});
	}

	render() {
		let content = (Object.keys(this.state).length >= 2) ? this.renderHealth() : this.renderLoading();

		let help = resources.help;

		this.renderCharts(this.state[recipeId].ingredients);		

		return <Actionbar back content={content} help={help} signOut />;
	}

	renderLoading() {
		return (
			<Container textAlign='center'>
				<Loader active content={resources.loader.text} />
			</Container>
		);
	}

	renderCharts(ingredients){
	return ( 
	<div>
		<pre id="spoonacular-ingredients" style="display:none">
	{ingredients}
	</pre>
	<div id="spoonacular-nutrition-visualizer"></div>
	<script type="text/javascript">
 	var spoonacularServings = 1;
	</script>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="https://spoonacular.com/cdn/spoonacular-1.6.min.js"></script>
	</div>);
	}


	renderHealth() {
		let headerSize = 'medium';

		let healthStats = Object.keys(this.state).map(recipeId => (
			<Grid.Column>
				<Grid.Column>
					<Header as='h2' color={globalResources.color.primary} content={this.state[recipeId].name} size={headerSize} />
				</Grid.Column>

				<List relaxed='very' vertical>
					{Object.keys(this.state[recipeId].health).map(healthStat => <List.Item content={<Statistic key={healthStat} label={healthStat} value={this.state[recipeId].health[healthStat]} color={globalResources.color.primary} size='mini' />} />)}
				</List>
			</Grid.Column>
		));

		let content = (
			<Grid columns='equal' divided textAlign='center'>
				<Grid.Row>
					{healthStats}
				</Grid.Row>
			</Grid>
		);

		return content;
	}

}
