import React from 'react';

export default function BoxColor(props) {
  const { r = 0, g = 0, b = 0, fontColor } = props;

  let color = `rgb(${r},${g},${b})`;

  let divStyle = {
    backgroundColor: color,
    border: '1px solid balck',
    margin: '10px',
    padding: '30px',
    color: `${fontColor}`,
  };

  return (
    <div style={divStyle}>
      rgb ({r},{g},{b}){' '}
    </div>
  );
}
