import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Landing from './recipe_book/Landing';
import RecipeList from './recipe_book/RecipeList';
import CreateRecipe from './recipe_book/CreateRecipe';
import ViewRecipe from './recipe_book/ViewRecipe';
import EditRecipe from './recipe_book/EditRecipe';
import DeleteRecipe from './recipe_book/DeleteRecipe';
import "../sass/main.scss";
import history from '../history';


const App = () => {
  return (
    <Router history={history}>
       <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/list" exact component={RecipeList} />
          <Route path="/new" exact component={CreateRecipe} />
          <Route path="/recipes/:id" exact component={ViewRecipe} />
          <Route path="/recipes/edit/:id"  exact component={EditRecipe} />
          <Route path="/recipes/delete/:id" exact component={DeleteRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;