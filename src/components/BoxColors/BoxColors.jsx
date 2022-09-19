import React from 'react';
import './BoxColors.css';

const BoxColors = (props) => {
  return (
    <div
      className="boxcolor-box"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      {props.r} {props.g} {props.b}
    </div>
  );
};

export default BoxColors;
