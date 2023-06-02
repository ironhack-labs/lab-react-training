import React from 'react';

function BoxColor({ r, g, b }) {
  const rect = {
    width: '800px',
    height: '100px',
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  return (
    <div className="color" style={rect}>
      {' '}
      RGB: {r}, {g}, {b}
    </div>
  );
}

export default BoxColor;
