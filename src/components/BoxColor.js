import React from 'react';

function BoxColor(props) {
  let rgb = `rgb(${props.r}, ${props.g}, ${props.b})`;

  let backgroundColor = {
    backgroundColor: `${rgb}`,
  };

  let rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };

  return (
    <div className="color box" style={backgroundColor}>
      rgb({props.r}, {props.g}, {props.b})
      <br />#{rgbToHex(props.r)}
      {rgbToHex(props.g)}
      {rgbToHex(props.b)}
    </div>
  );
}

export default BoxColor;
