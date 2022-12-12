import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, inverted, isSignedIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isSignedIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
