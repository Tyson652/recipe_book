import recipes from '../apis/recipes';
import { CREATE_RECIPE } from './types';

export const CreateRecipeAction = (formValues) => async dispatch => {
  const response = await recipes.post('/recipes', formValues);

  dispatch({ type: CREATE_RECIPE, payload: response.data });
}