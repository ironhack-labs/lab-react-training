import React from 'react';

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
  const { r = 0, g = 0, b = 0 } = props; // add the =0 just to be save
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  //   https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html

  return (
    <div style={divStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
