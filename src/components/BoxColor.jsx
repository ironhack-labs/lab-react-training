import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb(${r},${g}, ${b})`,
    color: 'white',
  };
  return (
    <div style={style}>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
