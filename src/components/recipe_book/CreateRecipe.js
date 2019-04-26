import React from 'react';
import RecipeForm from './RecipeForm';
import { CreateRecipeAction } from '../../actions';
import { connect } from 'react-redux';

class CreateRecipe extends React.Component {
  onSubmit = (formValues) => {
    this.props.CreateRecipeAction(formValues);
  }

  render() {
    console.log(this.props);
    return (
      <div className="create-recipe">
        <div className="create-recipe__inner">
          <h2 class="white-title">Add a new recipe</h2>
          <RecipeForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {CreateRecipeAction})(CreateRecipe);