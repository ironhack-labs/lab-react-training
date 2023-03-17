import React from 'react';
import './BoxColor.css';
import '../../App.css';


function BoxColor({ r, g, b }) {
  const backColor = {
    backgroundColor: `rgba(${r},${g},${b})`,
  };

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');


  return (
    <div>
      <div
        className="BoxColor"
        style={backColor}
      >
        rgb({r},{g},{b})<div>{rgbToHex(r, g, b)}</div>
      </div>
    </div>
  );
}


export default BoxColor;



