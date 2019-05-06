import React from 'react';
import { connect } from 'react-redux';
import { FetchRecipeAction } from '../../actions';
import { Link } from 'react-router-dom';
import LogoImage from '../../sass/img/logo-white.png';

class ViewRecipe extends React.Component {
  componentDidMount() {
    this.props.FetchRecipeAction(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    
    if (!this.props.recipe) {
      return <div>Loading...</div>;
    }

    const { title, ingredients, calories, id } = this.props.recipe;
    return (
        <div className="outer-border">
        <div className="create-recipe header">
          <div className="header__logo-box">
              <Link to='/list'>
                <img src={LogoImage} alt="logo" className="header__logo" />
              </Link>
            </div>
          <div className="create-recipe__inner">
            <h2 className="white-title">{title}</h2>
            <p className="white-text">Ingredients: {ingredients}</p>
            <p className="white-text">Calories: {calories}</p>
            <Link to={`/recipes/edit/${id}`}>
              <button id="semantic-button" className="ui button primary semantic-button--3">Edit Recipe</button>
            </Link> 
            <Link to={`/recipes/delete/${id}`}>
              <button id="semantic-button" className="ui button primary semantic-button--4">Delete Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes[ownProps.match.params.id]
  };
} 

export default connect(mapStateToProps, { FetchRecipeAction })(ViewRecipe);