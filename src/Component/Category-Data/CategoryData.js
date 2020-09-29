import React from "react";
import CategoryItem from "../Category-Item/CategoryItem";
let data = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    size: 4,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    size: 4,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    size: 4,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: 6,
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: 6,
    id: 5,
    linkUrl: "shop/mens",
  },
];
class CategoryData extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryData: data,
    };
  }
  render() {
    console.log(this.state.categoryData);
    return <div><CategoryItem categoryData={this.state.categoryData} /></div>;
  }
}
export default CategoryData;
