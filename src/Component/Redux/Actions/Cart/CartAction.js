export const showCartDropdown = () => ({ type: "TOGGLE_CART_SHOW" });
export const hideCartDropdown = () => ({ type: "TOGGLE_CART_HIDE" });
export const addCartItem = (item) => ({
  type: "ADD_CART_ITEM",
  payload: item,
});
