import React from 'react';

export default function BoxColor({ r, g, b }) {
  const rgbString = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: rgbString,
    border: '3px solid black',
    padding: 40,
    marginBottom: 10,
    width: 700,
  };

  return (
    <div className="box-color-div" style={boxStyle}>
      <h1 className="rgb-text">{rgbString}</h1>
    </div>
  );
}
