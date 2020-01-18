import React from "react";
import './BoxColor.css'
const BoxColor = ({r, g, b}) => {
  console.log(r)
  
	return <div style={{background:`rgb(${r},${g},${b})`}} className="color-box">
    <div></div>
  </div>;
};

export default BoxColor;
