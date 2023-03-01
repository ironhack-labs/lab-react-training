import React from 'react';

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  return (
    <div className="container-default" style={divStyle}>
      {`rgb(${r},${g},${b})`}
    </div>
  );
}

export default BoxColor;
