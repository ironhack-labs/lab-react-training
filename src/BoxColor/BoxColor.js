import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const color = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  function RGBToHex(props) {
    let r = props.r.toString(16);
    let g = props.g.toString(16);
    let b = props.b.toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length ===1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  return (
    <div className="boxColor" style={color}>
      rgb({props.r}, {props.g}, {props.b}) <br>
      </br>{RGBToHex(props)}
    </div>
  );
}

export default BoxColor;