import React from 'react';

function BoxColor(props) {
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      rgb({props.r}, {props.g}, {props.b})<br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}
export default BoxColor;
