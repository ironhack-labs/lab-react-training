import React from 'react'

const BoxColor = (props) => {
  const { r, g, b } = props;
  const returnRgb = (r, g, b) => {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  return (
    <div style={{ backgroundColor: returnRgb(r, g, b) }}>
      <p>
        <h3>{returnRgb(r, g, b)}</h3>
      </p>
    </div>
  );
};

export default BoxColor
