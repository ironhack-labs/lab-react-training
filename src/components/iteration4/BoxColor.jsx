import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };
  const fullColorHex = (r, g, b) => {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red + green + blue;
  };
  return (
    <li
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 p-5"
    >
      rgb({r},{g},{b}) # {fullColorHex(r, g, b)}
    </li>
  );
};

export default BoxColor;
