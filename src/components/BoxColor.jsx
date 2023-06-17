import React from 'react';

function BoxColor(props) {
  return (
    <div
      className="box"
      style={{ background: `rgb(${props.r}, ${props.g}, ${props.b}` }}
    ></div>
  );
}

export default BoxColor;
