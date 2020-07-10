import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const divStyle = (r, g, b) => {
    if (r === 255) {
      return { color: 'white', backgroundColor: `rgb(${r},${g},${b})` };
    }
    return { backgroundColor: `rgb(${r},${g},${b})` };
  };

  const componentToHex = (component) => {
    let hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  const rgbToHex = (r, g, b) =>
    `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  return (
    <div className="card-box" style={divStyle(props.r, props.g, props.b)}>
      <h4>
        rgb({props.r},{props.g},{props.b})
      </h4>
      <h4>{rgbToHex(props.r, props.g, props.b)}</h4>
    </div>
  );
};

export default BoxColor;
