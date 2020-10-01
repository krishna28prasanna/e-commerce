import React from "react";
import "./CustomButton.css"
const CustomButton = ({ children,signIn,...otherprops }) => {
  console.log("button - ",otherprops)
  return (
    <button className={`${signIn ? "google-login" : "custom-btn"}`} {...otherprops}>
      {children}
    </button>
  );
};
export default CustomButton
