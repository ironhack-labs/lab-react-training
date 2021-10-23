import React from 'react';

function BoxColor(props) {
  const divStyle = {
    background: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    border: '2px solid #000',
    width: '200px',
    height: '200px',
  };

  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g},{props.b})
      {ConvertRGBtoHex(props.r, props.g, props.b)}
    </div>
  );
}

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return '#' + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));

export default BoxColor;
