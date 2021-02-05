
import React from 'react';

const BoxColor = (props) => {
  const coloring = props.hex
    ? props.hex
    : `rgb(${props.r},${props.g},${props.b})`;
  return (
    <div className={props.class} style={{ backgroundColor: coloring }}>
      {props.children}
    </div>
  );
};

export default BoxColor;