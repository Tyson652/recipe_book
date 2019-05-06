import React from 'react';
import { connect } from 'react-redux';
import { FetchRecipesAction } from '../../actions';
import { Link } from 'react-router-dom';
import LogoImage from '../../sass/img/logo-white.png';

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
        <div className="recipe-list-item" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2 className="white-list-items">{recipe.title}</h2>
          </Link>
        </div>
      );
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="outer-border">
        <div className="create-recipe header">
          <div className="header__logo-box">
              <Link to='/'>
                <img src={LogoImage} alt="logo" className="header__logo" />
              </Link>
            </div>
          <div className="create-recipe__inner">
            <h2 className="white-title">Your Recipes</h2>
            <Link to="/new">
              <button id="semantic-button" className="ui button primary semantic-button--2">Add Recipe</button>
            </Link>
            <div>{this.renderList()}</div>
          </div>
        </div>
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