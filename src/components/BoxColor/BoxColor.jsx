import React from 'react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const BoxColor = ({ r, g, b }) => {
  const newColor = `rgb(${r},${g},${b})`;
  const divStyle = {
    backgroundColor: newColor ,
    height: 50,
  };
  const hexColor=rgbToHex(r, g, b);
  return (
    <div style={divStyle}>
      rgb({r},{g},{b}) - {hexColor}
    </div>
  );
};
