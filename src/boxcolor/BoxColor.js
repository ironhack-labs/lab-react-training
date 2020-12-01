import React from 'react';

const BoxColor = ({ r, g, b }) => {
  let background = `rgb(${r},${g},${b})`;

  const divStyle = {
    backgroundColor: background,
    border: '1px solid black',
    width: '100%',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1% 3%',
    paddingLeft: '5px',
  };
  return (
    <div style={divStyle}>
      <p>{background}</p>
    </div>
  );
};

export default BoxColor;
