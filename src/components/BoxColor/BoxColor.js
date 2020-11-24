import React from "react";
import './BoxColor.css';

const BoxColor = (props) => {

   const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

    return (
       <div style={divStyle} className="box-container">
           <span>rgb{props.r},{props.g},{props.b}</span>
       </div>
    );
};

export default BoxColor;