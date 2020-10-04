import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { addCartItem, decrementQty, removeCartItem } from "../Redux/Actions/Cart/CartAction";
const CheckoutTable = ({cartItem,dispatch}) => {
  return (
    <div>
      <Table responsive="sm" className="checkout-table">
        <thead>
          <tr className="checkout-header">
            <th>
              <span>Product</span>
            </th>
            <th>
              <span>Description</span>
            </th>
            <th>
              <span>Quantity</span>
            </th>
            <th>
              <span>Price</span>
            </th>
            <th>
              <span>Remove</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item) => {
              const { id, imageUrl, name, price, quantity } = item
            return (
              <tr key={id}>
                <td>
                  <img src={imageUrl} className="checkout-img" />
                </td>
                <td>{name}</td>
                <td><FontAwesomeIcon icon={faAngleLeft} onClick={()=>{
                    dispatch(addCartItem(item))
                }} /><span style={{"padding": "0px 7px"}}>{quantity}</span><FontAwesomeIcon icon={faAngleRight} onClick={()=>{
                    dispatch(decrementQty(item))
                }} /></td>
                <td>{price}</td>
                <td>
                  <FontAwesomeIcon className="checkout-delete" icon={faTrashAlt} onClick={()=>{
                      dispatch(removeCartItem(id))
                  }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default CheckoutTable;
