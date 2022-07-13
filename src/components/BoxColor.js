import React from 'react';

function BoxColor(props) {
  return (
    <div
      style={{
        display: 'flex',
        padding: '2rem',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      <p
        style={{
          display: 'flex',
          margin: '0 auto',
          color: '#000000',
          fontWeight: 'bold',
        }}
      >
        {props.r} {props.g} {props.b}
      </p>
    </div>
  );
}

export default BoxColor;
