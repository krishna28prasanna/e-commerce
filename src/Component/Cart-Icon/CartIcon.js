import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { showCartDropdown } from "../Redux/Actions/Cart/CartAction";
import "./CartIcon.css";
import {selectCartItemsCount} from "../Redux/Cart.Selectors"
const CartIcon = ({ showCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={showCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCartDropdown: () => {
      console.log("called cart");
      dispatch(showCartDropdown());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
