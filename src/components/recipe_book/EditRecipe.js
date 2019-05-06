import React from 'react';
import { connect } from 'react-redux';
import { EditRecipeAction, FetchRecipeAction } from '../../actions';

class EditRecipe extends React.Component {
  componentDidMount() {
    this.props.FetchRecipeAction(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>EditRecipe</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps, 
  { EditRecipeAction, FetchRecipeAction }
)(EditRecipe);