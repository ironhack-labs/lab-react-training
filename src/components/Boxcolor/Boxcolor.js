import React from 'react';

function BoxColor(props) {
  let r = props.r;
  let g = props.g;
  let b = props.b;

  // color = r,g,b
  const rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };

  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${b}, ${g})` }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>
        {red}
        {green}
        {blue}
      </p>
    </div>
  );
}

export default BoxColor;
