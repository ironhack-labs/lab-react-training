import React from 'react';

const BoxColor = (props) => {
  const color = `rgb(${props.r},${props.g},${props.b})`;

  return (
    <div>
      <p style={{ backgroundColor: color }} className="rectangle"></p>
    </div>
  );
};

export default BoxColor;
