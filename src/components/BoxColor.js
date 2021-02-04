import React from 'react';

function BoxColor(props) {
  const color = props.hex
    ? props.hex
    : `rgb(${props.r}, ${props.g}, ${props.b})`;
  return (
    <div className={props.class} style={{ backgroundColor: color }}>
      {props.children}
    </div>
  );
}

export default BoxColor;
