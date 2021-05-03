import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  return (
    <div
      className="BoxColor"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <h2>
        rgb({r},{g},{b})
      </h2>
      <h2>{rgbToHex(r, g, b)}</h2>
    </div>
  );
};

export default BoxColor;
