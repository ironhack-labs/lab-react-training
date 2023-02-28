import React from 'react';

function BoxColor(props) {
  const { r, b, g } = props;
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '100vw',
    height: '10vh',
  };
  return <div style={style}>
    <p>rgb({r}, {g},{b})</p>
  </div>;
}

export default BoxColor;
