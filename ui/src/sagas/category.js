import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_CATEGORIES } from '../constants/ActionTypes';

const getCategories = async () => {
  const categories = await axios
    .get('/api/v1/danhmuc')
    .then((response) => response.data);
  return categories;
};

function* setCategories() {
  const categories = yield call(getCategories);
  yield put({ type: SET_CATEGORIES, payload: categories });
}

export default function* watchCatagoryAsync() {
  yield takeEvery('SET_CATEGORIES_ASYNC', setCategories);
}
