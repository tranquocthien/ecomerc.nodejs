import axios from 'axios';
import { CHANGE_LOGIN_STATE } from '../constants/ActionTypes';

export const changeLoginState = (dispatch) => {
  return dispatch({
    type: CHANGE_LOGIN_STATE,
  });
};

export const setCredentials = (dispatch) => {
  return dispatch({
    type: 'SET_CREDENTIALS_ASYNC',
  });
};
