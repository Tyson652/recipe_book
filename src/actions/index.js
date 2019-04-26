import recipes from '../apis/recipes';
import { CREATE_RECIPE, FETCH_RECIPES } from './types';

export const CreateRecipeAction = (formValues) => async dispatch => {
  const response = await recipes.post('/recipes', formValues);

  dispatch({ type: CREATE_RECIPE, payload: response.data });
}

export const FetchRecipesAction = () => async dispatch => {
  const response = await recipes.get('/recipes');

  dispatch({ type: FETCH_RECIPES, payload: response.data });
}