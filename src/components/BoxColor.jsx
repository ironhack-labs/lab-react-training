import React from 'react';

import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = {
    background: `rgb(${r},${g},${b})`,
  };

  return (
    <div className='box' style={backgroundColor}>
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
