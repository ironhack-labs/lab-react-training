import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: '50px',
      }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
