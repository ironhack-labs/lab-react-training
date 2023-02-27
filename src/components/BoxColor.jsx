import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: '100px',
    border: '1px solid black'
  };
  return (
    <div className="box-color" style={style}>
      rgb({r}, {g}, {b})
    </div>
  );
};

export default BoxColor;