import React from 'react';

const BoxColor = ({ r, g, b }) => {
    
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
  };

  return <div style={boxStyle}></div>;
};

export default BoxColor;
