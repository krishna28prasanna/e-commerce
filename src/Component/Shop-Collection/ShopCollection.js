import React from "react";
import ShopPreview from "./ShopPreview";
const ShopCollection = (props) => {
  console.log("shop - ", props);
  return (
    <div className="container-fluid">
      {props.shopData.map((data) => {
        return (
          <div className="shop-item">
            <h1>{data.title}</h1>
            <div className="row" key={data.id}>
              {data.items
                .filter((item, i) => i < 4)
                .map((item) => {
                  return (
                    <div className="col-md-3 mb-4" key={item.id}>
                      <ShopPreview item={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShopCollection;
