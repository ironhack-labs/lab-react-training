import React from 'react';

function BoxColor(props) {
  function rgbInHex(value) {
    let hex = Number(value).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  function colorHex({ r, g, b }) {
    const red = rgbInHex(r);
    const green = rgbInHex(g);
    const blue = rgbInHex(b);

    return '#' + red + green + blue;
  }

  return (
    <div
      className="box-color-container box-color"
      style={{
        backgroundColor: colorHex({ r: props.r, g: props.g, b: props.b }),
      }}
    >
      <p> RGB ({`${props.r}, ${props.g}, ${props.b}`})</p>
      <p>COLOR HEX {colorHex({ r: props.r, g: props.g, b: props.b })}</p>
    </div>
  );
}
export default BoxColor;
