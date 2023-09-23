import "../App.css";
import React from "react";


function BoxColor(props) {
  const { r, g, b } = props;


  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  // bonus
  const rgbToHex = (r, g, b) =>
 
    "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");
    

  

let hexNumber = rgbToHex(r, g, b);

  return (
    <div className="card box" style={divStyle}>
      <h3>
        rgb({r},{g},{b})
      </h3>
      <h5>{hexNumber}</h5>
    </div>
  );
}

export default BoxColor;
