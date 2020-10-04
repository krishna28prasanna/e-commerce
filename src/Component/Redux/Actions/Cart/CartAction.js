export const showCartDropdown = () => ({ type: "TOGGLE_CART_SHOW" });
export const hideCartDropdown = () => ({ type: "TOGGLE_CART_HIDE" });
export const addCartItem = (item) => ({
  type: "ADD_CART_ITEM",
  payload: item,
});
export const removeCartItem = (item) => ({
  type: "REMOVE_CART_ITEM",
  payload: item,
});

export const decrementQty = (item) =>{
  return{
    type : "DECREMENT_CART_QTY",
    payload : item
  }
}