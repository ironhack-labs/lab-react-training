import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '16px',
  };

  return (
    <div style={boxStyle}>
      RGB: {r}, {g}, {b}
    </div>
  );
};

export default BoxColor;