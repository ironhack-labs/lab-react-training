import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: '1px solid black',
        margin: '3px',
        width: '100%',
        height: '150px',
      }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
