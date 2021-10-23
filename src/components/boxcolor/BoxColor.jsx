import React from 'react';

function BoxColor(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g},${props.b})`,
        height: 150,
      }}
    >
      {props.children}
    </div>
  );
}
export default BoxColor;
