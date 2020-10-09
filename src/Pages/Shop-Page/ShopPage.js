import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPreview from "../../Component/Shop-Collection/CollectionPreview";
import ShopCollection from "../../Component/Shop-Collection/ShopCollection";
const ShopPage = (props) => {
  console.log('page - ',props)
    return (
      <div>
        <Route path={`${props.match.path}`} component={ShopCollection} exact /> 
        <Route path={`${props.match.path}/:categoryId`} component={CollectionPreview} exact /> 
      </div>
    );
}
export default ShopPage;
