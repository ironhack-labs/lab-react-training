import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  
  const rgbToHex = () => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <div>
        <h3>rgb ({r},{g},{b})</h3>
        <h3>{rgbToHex()}</h3>
      </div>
    </div>
  )
}

export default BoxColor;