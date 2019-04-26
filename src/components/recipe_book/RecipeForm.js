import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RecipeForm extends React.Component {
  renderError({ error, touched }) {
    if (touched & error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label id="form-label">{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div className="recipe-form">
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} type="text" label="Enter title" />
          <Field name="ingredients" component={this.renderInput} type="text" label="Enter ingredients" />
          <Field name="calories" component={this.renderInput} type="text" label="Enter calories" />
          <button id="semantic-button" className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.ingredients) {
    errors.ingredients = 'You must enter some ingredients';
  }

  if (!formValues.calories) {
    errors.calories = 'You must enter the calories';
  }
}

export default reduxForm({
  form: 'RecipeForm',
  validate
})(RecipeForm);