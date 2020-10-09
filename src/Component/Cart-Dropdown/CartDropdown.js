import React, { useState } from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./CartDropdown.css";
import { Modal} from "react-bootstrap";
import { connect } from "react-redux";
import { hideCartDropdown } from "../Redux/Actions/Cart/CartAction";
import CartItem from "../Cart-Items/CartItem";
import {selectCartHidden,selectCartItems} from "../Redux/Reducers/Cart/Cart.Selectors"
import {createStructuredSelector} from "reselect"
import { Link } from "react-router-dom";
const CartDropdown = ({ hidden, dispatch, cartItem}) => {
  const handleClose = () => {
    dispatch(hideCartDropdown());
  };
  return (
    <div className="cart-dropdown">
      <Modal show={hidden} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-body">
            {cartItem.length !=0 ?cartItem.map((item) => {
              return <CartItem key={item.id} item={item} />;
            }): <div className="text-center cart-empty">Items not found</div>}
          </div>
          <div className="text-center checkout-btn">
            <Link to="/checkout" onClick={handleClose}><CustomButton>GO TO CHECKOUT</CustomButton></Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    hidden : selectCartHidden,
    cartItem : selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
