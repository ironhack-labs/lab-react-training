import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const color = `rgb(${r},${g},${b})`;

  return <div style={{ backgroundColor: color }}> RGB </div>;
}

export default BoxColor;
