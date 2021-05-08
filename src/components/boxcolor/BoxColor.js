import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  //   https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
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
