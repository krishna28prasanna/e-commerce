import React, { useState } from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./CartDropdown.css";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {hideCartDropdown} from "../Redux/Actions/Cart/CartAction"

const CartDropdown = ({ hidden, dispatch }) => {
  const handleClose = () => {
    dispatch(hideCartDropdown());
  };
  //   const handleShow = () => setShow(true);
  return (
    <div className="cart-dropdown">
      <Modal show={hidden} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
            <div className="text-center">
            <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = ({ cartDropdown: { hidden } }) => {
  return {
    hidden,
  };
};
export default connect(mapStateToProps)(CartDropdown);
