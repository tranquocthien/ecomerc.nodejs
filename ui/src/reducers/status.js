const initialState = {
  isLoading: false,
};

const status = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_LOADING':
      return {
        isLoading: true,
      };
    case 'ON_SUCCESS':
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
export default status;
