import React from 'react';

function BoxColor({ r, g, b }) {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const textColor = (r + g + b) / 3 > 127 ? 'black' : 'white';

  const boxStyle = {
    backgroundColor: rgbColor,
    color: textColor,
    width: '200px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    margin: '10px'
  };

  return (
    <div className="box-color" style={boxStyle}>
      {rgbColor}
    </div>
  );
}

export default BoxColor;
