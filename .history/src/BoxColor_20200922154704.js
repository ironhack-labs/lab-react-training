import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
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
    </div>
  );
}

export default BoxColor;
