import { CREATE_RECIPE } from '../actions/types';

export default (state={}, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};