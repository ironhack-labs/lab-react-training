import React from 'react';
import './boxColor.css';

const BoxColor = ({ r, g, b }) => {
  const divColor = { backgroundColor: `rgb(${r},${g},${b})` };
  return (
    <div className='box boxColor' style={divColor}>
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
