import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const hex = rgbConversor(props.r, props.g, props.b);
  return (
    <div
      className="BoxColorContainer"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      <p>
        rgb ({r},{g}, {b})
      </p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
