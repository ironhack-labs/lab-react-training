import React from 'react';

function BoxColor(props) {
    const {r, g, b} = props;
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '100px',
        height: '100px',
      }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
