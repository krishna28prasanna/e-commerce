import React from "react";
import "./CategoryItem.css";
const CategoryItem = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.categoryData.map(({ id, size, imageUrl, title }) => {
          return (
            <div key={id} className={`col-md-${size}`}>
              <div className="category">
                  <div className="img-over">
                  <img src={imageUrl} />
                  </div>
                
                <div className="content">
                  <h1>{title.toUpperCase()}</h1>
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryItem;
