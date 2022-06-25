import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`,
    height: '10vh',
    color: 'black',
  };
  return (
    <div>
      <div style={boxStyle}>{`rgb(${r}, ${g}, ${b})`}</div>
    </div>
  );
};

export default BoxColor;
