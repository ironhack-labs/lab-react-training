import React from 'react';

function BoxColor(props) {
  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
  };

  return (
    <div style={style}>
      rgb ({props.r} {props.g} {props.b})
    </div>
  );
}

export default BoxColor;
