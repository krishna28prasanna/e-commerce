import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {createStructuredSelector} from "reselect"
import { selectDirectoryData } from "../Redux/Reducers/Directory/directory.selectors";
import "./CategoryItem.css";
const CategoryItem = (props) => {
  console.log(props.match.url);
  const handleClick = (linkUrl) => {
    props.history.push(linkUrl);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {props.directory.map(({ id, size, imageUrl, title, linkUrl }) => {
          return (
            <div key={id} className={`col-md-${size}`}>
              <div className="category-items">
                <div
                  className="category"
                  onClick={() => {
                    handleClick(linkUrl);
                  }}
                >
                    <img src={imageUrl} />

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
const mapStateToProps = createStructuredSelector({
  directory : selectDirectoryData
})
export default withRouter(connect(mapStateToProps)(CategoryItem));
