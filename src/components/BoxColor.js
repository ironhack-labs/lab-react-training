import React from 'react';

export const BoxColor = ({ r, g, b }) => {
  const style = {
    background: `rgb(${r},${g},${b})`,
  };
  return (
    <div style={style}>
      rgb({r},{g},{b})
    </div>
  );
};
