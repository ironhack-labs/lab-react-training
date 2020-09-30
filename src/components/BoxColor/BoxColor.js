import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  return (
    <div
      className="BoxColor-container"
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: `${props.color}`,
      }}
    >
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
