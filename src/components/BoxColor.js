import React from 'react';
import '../App.css';

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
  const { r, g, b } = props;
  const style = {
    border: 'solid black 1px',
    background: `rgb(${r},${g},${b})`,
    height: '100px',
  };

  return (
    <div className="box-color" style={style}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
