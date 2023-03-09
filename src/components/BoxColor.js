import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const style = { background: `rgb(${r},${g},${b})` };
  return (
    <div className="color" style={style}>
      rgb(${r},${g},${b})
    </div>
  );
}

export default BoxColor;
