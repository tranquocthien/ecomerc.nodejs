import { CHANGE_LOGIN_STATE, SET_CREDENTIALS } from '../constants/ActionTypes';

const initialState = {
  isLogin: false,
  credentials: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATE:
      return {
        ...state,
        isLogin: true,
      };
    case SET_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload,
      };
    default:
      return state;
  }
};

export default user;
