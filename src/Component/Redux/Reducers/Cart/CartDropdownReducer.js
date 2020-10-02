const initialState = {
  hidden: false,
};

const cartDropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_SHOW":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "TOGGLE_CART_HIDE":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
export default cartDropdownReducer