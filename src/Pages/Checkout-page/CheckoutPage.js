import React from "react";
import "./CheckoutPage.css";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Component/Redux/Cart.Selectors";
import { createStructuredSelector } from "reselect";
import CheckoutTable from "../../Component/Checkout-Table/CheckoutTable";
const CheckoutPage = ({ cartItem, cartTotal,dispatch }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <div className="checkout-page">
            {cartItem.length != 0 ? (
              <CheckoutTable cartItem={cartItem} dispatch={dispatch} />
            ) : (
              <div className="checkout-empty">
                <h4>Items Not Found</h4>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="total-details">
            <h4>Total - {cartTotal}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
