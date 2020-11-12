import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  return (
    <div
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
      className="boxColor"
    >
      <p>
        rgb({props.r}, {props.g}, {props.b}{' '}
      </p>
    </div>
  );
}

export default BoxColor;
