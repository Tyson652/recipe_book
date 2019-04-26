import React from 'react';
import { connect } from 'react-redux';
import { FetchRecipesAction } from '../../actions';

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.FetchRecipesAction();
  }

  renderList() {
    if (!this.props.recipes)  {
      return <div>Loading...</div>;
    }

    return this.props.recipes.map(recipe => {
      return (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.calories}</p>
        </div>
      );
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>RecipeList</div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes)
  };
}

export default connect(mapStateToProps, {FetchRecipesAction})(RecipeList);