import {handleCartQty,removeCartItem,decreaseCartQty} from "./Cart.Utils"
const initialState = {
  hidden: false,
  cartItem : []
};

const cartReducer = (state = initialState, action) => {
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
    case "ADD_CART_ITEM":
      return{
        ...state,
        cartItem : handleCartQty(state.cartItem,action.payload)
      }
    case "REMOVE_CART_ITEM":
      return{
        ...state,
        cartItem : removeCartItem(state.cartItem,action.payload)
      }
    case "DECREMENT_CART_QTY":
      return{
        ...state,
        cartItem : decreaseCartQty(state.cartItem,action.payload)
      }
    default:
      return state;
  }
};
export default cartReducer