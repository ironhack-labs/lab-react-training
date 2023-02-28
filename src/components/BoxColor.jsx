import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div className="rectBox" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      {`rgb(${r},${g},${b})`}
    </div>
  );
}

export default BoxColor;
