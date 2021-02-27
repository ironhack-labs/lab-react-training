import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const color = 'rgb(' + r + ',' + g + ',' + b + ')';
  return (
    <div style={{ backgroundColor: color }} class="boxFrame centerStyle">
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
