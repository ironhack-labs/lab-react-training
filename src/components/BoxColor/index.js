import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    background: `rgb(${r},${g},${b})`,
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className="card" style={divStyle}>
      <p>
        rgb({r} {g} {b})
      </p>
    </div>
  );
};

export default BoxColor;
