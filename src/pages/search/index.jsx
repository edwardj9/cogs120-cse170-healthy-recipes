import resources from './page_message.json';

import Actionbar from '../../components/actionbar/index';
import RecipeList from '../../components/recipelist/index';
import Searchbar from '../../components/searchbar/index';

import React from 'react';
import { Container, Loader } from 'semantic-ui-react';

export default class Search extends React.Component {

// var resultSize = 10;
// var autoCompleteUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/autocomplete?";
// var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?";

	constructor() {
		super();

		this.state = {
			recipes: [{"id":94628,"title":"Chicken-Like Gravy (Vegan)","readyInMinutes":25,"image":"chicken-like-gravy-2-94628.jpg","imageUrls":["chicken-like-gravy-2-94628.jpg","chicken-like_gravy-94628.jpg"]},{"id":100952,"title":"'chicken' Tikka Masala - Vegan Style","readyInMinutes":75,"image":"chicken-tikka-masala-vegan-style-2-100952.jpg","imageUrls":["chicken-tikka-masala-vegan-style-2-100952.jpg"]},{"id":101816,"title":"Madras Curry (Vegan or Chicken)","readyInMinutes":210,"image":"madras-curry-2-101816.jpg","imageUrls":["madras-curry-2-101816.jpg","madras_curry-101816.jpg"]},{"id":102295,"title":"5 Minute Easy Vegan \" Chicken\" Guacamole Tacos","readyInMinutes":6,"image":"5-minute-easy-vegan-chicken-guacamole-tacos-2-102295.jpg","imageUrls":["5-minute-easy-vegan-chicken-guacamole-tacos-2-102295.jpg","5_minute_easy_vegan_chicken_guacamole_tacos-102295.jpg"]},{"id":248685,"title":"“Chicken” Poppy Seed Vegan Casserole","readyInMinutes":45,"image":"Chicken-Poppy-Seed-Vegan-Casserole-248685.jpg","imageUrls":["Chicken-Poppy-Seed-Vegan-Casserole-248685.jpg"]},{"id":505094,"title":"Chicken & Mushroom Sweet Potato Noodles with Vegan Quinoa Alfredo Sauce","readyInMinutes":320,"image":"Chicken---Mushroom-Sweet-Potato-Noodles-with-Vegan-Quinoa-Alfredo-Sauce-505094.jpg","imageUrls":["Chicken---Mushroom-Sweet-Potato-Noodles-with-Vegan-Quinoa-Alfredo-Sauce-505094.jpg"]},{"id":543060,"title":"Root Vegetable Chicken Pot Pie, Gluten & Dairy Free w/ Vegan Option","readyInMinutes":65,"image":"Root-Vegetable-Chicken-Pot-Pie--Gluten---Dairy-Free-w--Vegan-Option-543060.jpg","imageUrls":["Root-Vegetable-Chicken-Pot-Pie--Gluten---Dairy-Free-w--Vegan-Option-543060.jpg"]},{"id":617874,"title":"Vegan Buffalo [No] Chicken Wraps","readyInMinutes":15,"image":"Vegan-Buffalo-[No]-Chicken-Wraps-617874.jpg","imageUrls":["Vegan-Buffalo-[No]-Chicken-Wraps-617874.jpg"]},{"id":626583,"title":"Easy Vegan Butter Chicken","readyInMinutes":25,"image":"Easy-Vegan-Butter-Chicken-626583.jpg","imageUrls":["Easy-Vegan-Butter-Chicken-626583.jpg"]},{"id":630117,"title":"Vegan Tempeh \"Chicken\" Salad Recipe","readyInMinutes":20,"image":"Vegan-Tempeh-Chicken-Salad-Recipe-630117.jpg","imageUrls":["Vegan-Tempeh-Chicken-Salad-Recipe-630117.jpg"]}],
			resultCount: 10,
		};
	}


/* Uncomment when full access is received
	componentWillMount(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url+"number="+this.resultSize+"&query="+this.props.query, true);
		xhr.setRequestHeader("X-Mashape-Key", process.env.API_KEY);
		xhr.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com");
		xhr.send();
		xhr.onload = function(e){
			if (xhr.readyState === 4){
				if (xhr.status === 200){
					this.setState({
						recipes: xhr.response.results,
						resultCount: xhr.response.totalResults,
					});
				} else {
					console.error(xhr.statusText);
				}
			}
		}.bind(this);
		xhr.send();
	},
*/

	render() {
		let recipeList;
		if (!!Object.keys(this.state.recipes).length)
			recipeList = <RecipeList recipes={this.state.recipes} />;
		else
			recipeList = (
				<Container textAlign='center'>
					<Loader active content={resources.loader.text} />
				</Container>
			);

		let content = (
			<div>
				<Searchbar />

				<div style={{ margin: '5%' }} />

				{recipeList}
			</div>
		);

		let help = resources.help;

		let title = resources.title.replace('-', this.props.query);
		title = title.replace('#', this.state.resultCount);

		return <Actionbar back content={content} help={help} signOut title={title} />;
	}

}
