import React from "react";
import "./ShopPreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
const ShopPreview = (props) => {
  console.log(props);
  return (
    <div>
      <div className="shop-details">
        <div className="product">
          <img src={props.item.imageUrl} style={{ width: "100%" }} />
          <div className="product-content">
            <button className="add-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <p>
        <span>{props.item.name}</span>
        <span className="product-spec">
          <FontAwesomeIcon icon={faRupeeSign} />
          {props.item.price}{" "}
          <del>{props.item.strike ? props.item.strike : ""}</del>
        </span>
      </p>
    </div>
  );
};
export default ShopPreview;
