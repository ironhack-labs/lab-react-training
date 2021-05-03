import React from 'react';

export default function BoxColour(props) {

  var bGHex = rgbToHex(props.r, props.g, props.b);
  return <div style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`}} className="BoxColour">
 here is the hex {bGHex}
      </div>;

}

function componentToHex(color) {
    var hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
