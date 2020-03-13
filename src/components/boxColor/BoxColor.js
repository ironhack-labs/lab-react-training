import React from "react";
import "./BoxColor.css";

// IdCard component
const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`
  };

  return <div className="boxColor-container" style={divStyle}></div>;
};

export default BoxColor;
