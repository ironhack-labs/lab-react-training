import React from 'react';
import './BoxColor.css';

const BoxColor = ({r, g, b}) => {

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
  <h5 className='boxColor' style={{backgroundColor:rgbToHex(r, g, b)}} >rgb({r}, {g}, {b}) {rgbToHex(r, g, b)}</h5>
  );
};

export default BoxColor;