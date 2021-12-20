export const addProduct = (dispatch, product) => {
  return dispatch({
    type: 'ADD_PRODUCT',
    payload: {
      product,
    },
  });
};

export const setCart = (dispatch, email) => {
  return dispatch({
    type: 'SET_CART_ASYNC',
    payload: {
      email,
    },
  });
};
