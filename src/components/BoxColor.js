import React from 'react';

function BoxColor(props) {
  const { r, g, b, children } = props;
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: 50,
        padding: 20,
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
