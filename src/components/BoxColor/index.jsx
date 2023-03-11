import React from 'react';
import './index.css'

const BoxColor = ({ r, g, b }) => {
  return (
    <div className='BoxColor' style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
};

export default BoxColor;