import React from 'react';

const BoxColor = ({ r, g, b, }) => {

  const numbersToHex = (color) => {
    const toHex = color.toString(16);
    return toHex.length === 1 ? '0' + toHex : toHex;
  };
  
  const rgbToHex = (r, g, b) => {
    return '#' + numbersToHex(r) + numbersToHex(g) + numbersToHex(b);
  };


  return (
    <div
      className="border words columns"
      style={{ backgroundColor: rgbToHex(r, g, b) }}
    >
      <p className="centered">
        rgb({r},{g},{b})
      </p>
      <p className="centered">{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
