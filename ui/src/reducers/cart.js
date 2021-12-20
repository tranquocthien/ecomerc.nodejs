const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return [...action.payload.products];
    case 'ADD_PRODUCT':
      return state.concat(action.payload.product);
    case 'REMOVE_PRODUCT':
      return state.filter(
        (product) => product['_id'] !== action.payload.product['_id']
      );
    default:
      return state;
  }
};

export default cart;
