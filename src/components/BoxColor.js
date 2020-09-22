import React from 'react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
  const {r,g,b} = props;

  return (
    <div className="boxColor" style={{backgroundColor: `rgb(${r}, ${g}, ${b}`}}>
      rgb({r},{g},{b});<br/>
      {rgbToHex(r,g,b)}
    </div>
  );
}

export default BoxColor;