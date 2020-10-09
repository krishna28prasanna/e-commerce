import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollection,
  selectShopData,
} from "../Redux/Reducers/ShopData/shopData.Selector";
import ShopPreview from "./ShopPreview";

const CollectionPreview = ({ collectionData }) => {
  console.log("category page", collectionData);
  return (
    <div className="container-fluid">
      <h1 className="text-center">{collectionData.title}</h1>
      <div className="row">
        {collectionData.items.map((item) => {
          return (
            <div className="col-md-3 mb-3" key={item.id}>
              <ShopPreview item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collectionData: selectCollection(ownProps.match.params.categoryId)(state),
  };
};
export default connect(mapStateToProps)(CollectionPreview);
