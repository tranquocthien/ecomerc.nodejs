import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

const getCart = async (email) => {
  const products = await axios
    .get(`/api/v1/cart?email=${email}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response.data;
    });
  return products;
};

function* setCart({ payload }) {
  const products = yield call(getCart, payload.email);
  yield put({ type: 'SET_CART', payload: { products } });
}

export default function* watchCartAsync() {
  yield takeEvery('SET_CART_ASYNC', setCart);
}
