import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  const divStyle = {
    backgroundColor: rgbColor,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '300px',
    marginBottom: '20px',
    borderRadius: '20px',
    
    
  };

  return <div style={divStyle}>{rgbColor}</div>;
}

export default BoxColor;
