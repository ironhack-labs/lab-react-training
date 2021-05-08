import React from 'react';

function BoxColor(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        margin: '1rem',
        padding: '1rem',
        color: 'white',
        border: '1px solid black',
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
