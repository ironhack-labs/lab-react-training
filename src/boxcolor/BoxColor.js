import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  // to get the color in hex form
  //   let rgbToHex = function (rgb) {
  //     let hex = Number(rgb).toString(16);
  //     if (hex.length < 2) {
  //       hex = '0' + hex;
  //     }
  //     return hex;
  //   };

  //   let fullColor;
  //   let fullColorHex = function (r, g, b) {
  //     let red = rgbToHex(r);
  //     let green = rgbToHex(g);
  //     let blue = rgbToHex(b);
  //     fullColor = red + green + blue;
  //     return fullColor;
  //   };

  const divStyle = {
    background: `rgb(${props.r}, ${props.b}, ${props.g})`,
    color: `${props.color}`,
  };

  return (
    <div style={divStyle} className="box-color">
      <h1>Rgb color</h1>
      <h2>
        {' '}
        rgb({props.r},{props.g},{props.b})
      </h2>
      {/* <p>#{fullColor}</p> */}
    </div>
  );
};
export default BoxColor;
