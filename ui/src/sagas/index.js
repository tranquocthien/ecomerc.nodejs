import { all } from 'redux-saga/effects';
import watchUserAsync from './user';
import watchCatagoryAsync from './category';
import watchCartAsync from './cart';

export default function* rootSaga() {
  yield all([watchUserAsync(), watchCatagoryAsync(), watchCartAsync()]);
}
