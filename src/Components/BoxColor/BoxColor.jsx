import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        height: '50px',
        color: 'white',
      }}
    >
      <span>
        rgb({r},{g},{b})
      </span>
    </div>
  );
};

export default BoxColor;
