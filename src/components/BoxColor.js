import React from 'react';

function rgbToHex(value) {
  let hex = Number(value).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}

function FullColorHex({ r, g, b }) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return '#' + red + green + blue;
}

function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: FullColorHex({ r, g, b }) }}>
      rbg({`${r}, ${g}, ${b}`})
      <br></br>
      {FullColorHex({ r, g, b })}
    </div>
  )
}

export default BoxColor;