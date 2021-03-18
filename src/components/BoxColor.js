import React from 'react';
import '../assets/css/BoxColor.css';
import { rgbToHex } from '../assets/misc/rgbToHex';

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r},${g},${b})`;
  const hexColor = rgbToHex(r, g, b);
  const divStyle = {
    backgroundColor: rgbColor,
    with: '100%',
    height: '4rem',
  };

  return (
    <div className="BoxColor" style={divStyle}>
      {rgbColor}
      <br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
