import React from 'react';
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
  const { r = 0, g = 0, b = 0 } = props;
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        backgroundColor: color,
        color: 'white',
        border: '1px solid black',
        margin: '1rem',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>
        {/* rgb({r}, {g}, {b}) */}
        {color}
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
export default BoxColor;
