import { SET_CATEGORIES } from '../constants/ActionTypes';

const initialState = {
  categories: null,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default category;
