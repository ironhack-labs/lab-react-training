import React from 'react';

export default function BoxColor({ r, g, b }) {
  const boxStyle = {
    'background-color': `rgb(${r},${g},${b})`,
    height: '100px',
    width: '300px',
    margin: '10px',
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div style={boxStyle}>
      rgb({r},{g},{b})<br></br>
      {rgbToHex(r, g, b)}
    </div>
  );
}
