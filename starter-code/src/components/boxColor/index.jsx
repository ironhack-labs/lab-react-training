import React from 'react';

const BoxColor = props => {
  let style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
    textAlign: 'center',
    padding: '5% 0%',
    width: '90%',
    margin: '1% 5%',
    border: '1px solid black',
    fontSize: '2em'
  };

  const hex = rgbToHex(props.r, props.g, props.b);

  return (
    <p style={style}>
      rgb( {props.r}, {props.g}, {props.b})
      <br />#{hex}
    </p>
  );
};

function rgbToHex(R, G, B) {
  return toHex(R) + toHex(G) + toHex(B);
}
function toHex(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return '00';
  n = Math.max(0, Math.min(n, 255));
  return '0123456789ABCDEF'.charAt((n - (n % 16)) / 16) + '0123456789ABCDEF'.charAt(n % 16);
}

export default BoxColor;
