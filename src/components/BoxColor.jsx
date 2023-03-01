import React from 'react';

function BoxColor(props) {
  let { r, g, b } = props;

  return (
    <div style={{ width: '400px',
    height: '90px',
    border: 'solid',
    paddingTop: '45px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,}}>
    rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
