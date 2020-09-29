import React from "react";
import { withRouter } from "react-router-dom";
import "./CategoryItem.css";
const CategoryItem = (props) => {
  console.log(props.match.url);
  const handleClick = (linkUrl) => {
    props.history.push(linkUrl);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {props.categoryData.map(({ id, size, imageUrl, title, linkUrl }) => {
          return (
            <div key={id} className={`col-md-${size}`}>
              <div className="category-items">
                <div
                  className="category"
                  onClick={() => {
                    handleClick(linkUrl);
                  }}
                >
                  <div className="img-over">
                    <img src={imageUrl} />
                  </div>

                  <div className="content">
                    <h1>{title.toUpperCase()}</h1>
                    <p>Shop Now</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default withRouter(CategoryItem);
