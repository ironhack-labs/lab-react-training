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
    width: '100%',
    marginBottom: '20px',
  };
  
  return <div class="boxColor" style={divStyle}>{rgbColor}</div>;
}

export default BoxColor;