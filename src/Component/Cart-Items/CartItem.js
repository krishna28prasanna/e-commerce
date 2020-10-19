import React from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
      <div className="row">
        <div className="col-sm-6 mb-2">
          <img src={imageUrl} className="cart-img" />
        </div>
        <div className="col-sm-6 mb-2">
          <div className="product-details">
            <h4>{name}</h4>
            <p>
              {quantity} X{" "}
              <span style={{ fontSize: "17px" }}>
                <FontAwesomeIcon icon={faRupeeSign} />
              </span>
              {price}
            </p>
          </div>
        </div>
      </div>
  );
};
export default React.memo(CartItem);
