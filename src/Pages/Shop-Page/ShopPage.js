import React,{lazy,Suspense} from "react";
import { Route } from "react-router-dom";
const CollectionPreview = lazy(()=>import("../../Component/Shop-Collection/CollectionPreview"))
const ShopCollection = lazy(()=>import("../../Component/Shop-Collection/ShopCollection"))
const ShopPage = (props) => {
    return (
      <div>
        <Suspense fallback={<div>Loading ...</div>}>
        <Route path={`${props.match.path}`} component={ShopCollection} exact /> 
        <Route path={`${props.match.path}/:categoryId`} component={CollectionPreview} exact /> 
        </Suspense>
      </div>
    );
}
export default ShopPage;
