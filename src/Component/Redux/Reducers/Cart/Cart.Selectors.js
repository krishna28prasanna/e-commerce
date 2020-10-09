// import {createSelector} from "reselect"

// const selectCart = state => state.cartData

// export const selectCartItemsCount = createSelector(
//     [selectCart],
//     item => item.cartItem.reduce((acc, data) => acc + data.quantity, 0)
// )

  
import { createSelector } from 'reselect';

const selectCart = state => state.cartData;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItem
);
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,item)=>acc + item.quantity * item.price,0)
)