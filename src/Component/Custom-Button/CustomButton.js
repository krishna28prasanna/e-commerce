import React from "react";
import "./CustomButton.css"
const CustomButton = ({children,...otherProps}) => {
  return (
    <button className="signIn" {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton
