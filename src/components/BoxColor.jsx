// BoxColor.jsx
import React from "react";
import "./BoxColor.css";

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="BoxContainer">
      <div style={divStyle} className="ColorBox">
      <p className="rgb">rgb({r}, {g}, {b})</p>
      </div></div>
  );
};

export default BoxColor;
