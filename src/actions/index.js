import recipes from '../apis/recipes';
import { CREATE_RECIPE, FETCH_RECIPES, FETCH_RECIPE, EDIT_RECIPE } from './types';
import history from '../history';


export const CreateRecipeAction = (formValues) => async dispatch => {
  const response = await recipes.post('/recipes', formValues);

  dispatch({ type: CREATE_RECIPE, payload: response.data });
  history.push('/list');
}

export const FetchRecipesAction = () => async dispatch => {
  const response = await recipes.get('/recipes');

  dispatch({ type: FETCH_RECIPES, payload: response.data });
}

export const FetchRecipeAction = (id) => async dispatch => {
  const response = await recipes.get(`/recipes/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
}

export const EditRecipeAction = (id, formValues) => async dispatch => {
  const response = await recipes.patch(`/recipes/${id}`, formValues);

  dispatch({ type: EDIT_RECIPE, payload: response.data });
}