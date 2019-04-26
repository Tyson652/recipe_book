import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './recipe_book/Landing';
import RecipeList from './recipe_book/RecipeList';
import CreateRecipe from './recipe_book/CreateRecipe';
import "../sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
       <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/list" exact component={RecipeList} />
          <Route path="/new" exact component={CreateRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;