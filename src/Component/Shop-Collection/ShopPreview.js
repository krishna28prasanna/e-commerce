import React from "react";
import "./ShopPreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {addCartItem} from "../Redux/Actions/Cart/CartAction"
const ShopPreview = ({item,addCartItem}) => {
  const {imageUrl,name,price,strike} = item
  return (
    <div>
      <div className="shop-details">
        <div className="product">
          <img src={imageUrl} style={{ width: "100%" }} />
          <div className="product-content">
            <button className="add-cart" onClick={()=>addCartItem(item)}>Add To Cart</button>
          </div>
        </div>
      </div>
      <p>
        <span>{name}</span>
        <span className="product-spec">
          <FontAwesomeIcon icon={faRupeeSign} />
          {price}{" "}
          <del>{strike ? strike : ""}</del>
        </span>
      </p>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addCartItem : item => dispatch(addCartItem(item))
})
export default connect(null,mapDispatchToProps)(ShopPreview);
