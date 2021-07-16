import React from 'react';
import './BoxColor.css';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


function BoxColor(props) {
  return (
    <div className="box" style= {{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
      rgb{`(${props.r}, ${props.g}, ${props.b})`}<br/>
      {rgbToHex(props.r,props.g,props.b)}
    </div>
  )
};

export default BoxColor;