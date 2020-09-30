import React from "react";
import ShopCollection from "../../Component/Shop-Collection/ShopCollection";
import shopData from "./ShopData";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      shopItems: shopData,
    };
  }
  render() {
    return (
      <div>
        <ShopCollection shopData={this.state.shopItems} />
      </div>
    );
  }
}
export default ShopPage;
