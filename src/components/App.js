import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../recipe_book/Landing';
import RecipeList from '../recipe_book/RecipeList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/list" exact component={RecipeList} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;