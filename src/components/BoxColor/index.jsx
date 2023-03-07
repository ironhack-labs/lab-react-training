import React from 'react';
import './index.css';

function BoxColor({ r, g, b }) {
  function RGBToHex(rgb) {
    var hex = rgb.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  const rgbToHex = '#' + RGBToHex(r) + RGBToHex(g) + RGBToHex(b);

  return (
    <div className="BoxColor" style={{ backgroundColor: rgbToHex }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex}</p>
    </div>
  );
}

export default BoxColor;
