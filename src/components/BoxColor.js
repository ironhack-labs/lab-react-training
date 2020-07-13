import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const rgbIndex = `rgb(${r},${g},${b})`;
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  const hexIndex = rgbToHex(r, g, b);
  return (
    <div className="box" style={{ backgroundColor: rgbIndex }}>
      <span>{rgbIndex}</span>
      <span>{hexIndex}</span>
    </div>
  );
};

export default BoxColor;
