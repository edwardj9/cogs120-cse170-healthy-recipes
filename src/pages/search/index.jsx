import resources from './page_message.json';

import Actionbar from '../../components/actionbar/index';
import RecipeList from '../../components/recipelist/index';
import Searchbar from '../../components/searchbar/index';

import React from 'react';
import { Container, Loader } from 'semantic-ui-react';

export default class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E'
      }
    };
  }

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

		return <Actionbar back content={content} help={help} signOut title={title} />;
	}

}
