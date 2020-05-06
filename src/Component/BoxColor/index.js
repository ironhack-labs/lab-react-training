import React from 'react';

const BoxColor = ({ r, g, b }) => {
  function num2Hex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return '#' + num2Hex(r) + num2Hex(g) + num2Hex(b);
  }

  const inv = hex =>
    '#' +
    hex
      .match(/[a-f0-9]{2}/gi) //wtf
      .map(e => ((255 - parseInt(e, 16)) | 0).toString(16).replace(/^([a-f0-9])$/, '0$1'))
      .join('');

  const hexColor = rgbToHex(r, g, b);

  const invHexColor = inv(hexColor);



  const divStyle = {
    backgroundColor: hexColor,
    color: invHexColor,
    border: '2px solid black',
    fontSize: '1rem',
    padding: ' 30px',
    textAling: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };
  return (
    <div style={divStyle} className="BoxColor">
      <p>
        RGB ({r},{g},{b})
      </p>
      <p>{'#' + rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
