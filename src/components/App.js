import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './recipe_book/Landing';
import RecipeList from './recipe_book/RecipeList';
import CreateRecipe from './recipe_book/CreateRecipe';
import "../sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/list" exact component={RecipeList} />
          <Route path="/new" exact component={CreateRecipe} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;