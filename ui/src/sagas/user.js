import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_CREDENTIALS } from '../constants/ActionTypes';

const getCredentials = async () => {
  const token = localStorage.getItem('token');
  const data = await axios('/api/v1/nguoidung', {
    headers: {
      Authorization: token,
    },
  }).then((response) => response.data);
  return data;
};

function* setCredentials() {
  const credentials = yield call(getCredentials);
  yield put({ type: SET_CREDENTIALS, payload: credentials });
}

export default function* watchUserAsync() {
  yield takeEvery('SET_CREDENTIALS_ASYNC', setCredentials);
}
