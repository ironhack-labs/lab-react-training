import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const style = {
    backgroundColor: `RGB(${r}, ${g}, ${b})`,
    height: '100px',
    width: '500px',
  };
  return (
    <p style={style}>
      rgb({r},{g},{b})
    </p>
  );
}

export default BoxColor;
