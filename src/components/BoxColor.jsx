import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        border: '1px solid black',
        margin: '1rem',
        padding: '1rem',
      }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
