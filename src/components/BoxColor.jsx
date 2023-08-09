import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const textColor = r + g + b > 500 ? 'black' : 'white';

  const boxStyle = {
    backgroundColor: bgColor,
    color: textColor,
    padding: '10px',
    margin: '10px',
    textAlign: 'center'
  };

  return (
    <div className="box-color" style={boxStyle}>
      {bgColor}
    </div>
  );
};

export default BoxColor;