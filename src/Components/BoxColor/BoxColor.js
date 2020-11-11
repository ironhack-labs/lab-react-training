import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  return (
    <div
      className="colorContainer"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
};

export default BoxColor;
