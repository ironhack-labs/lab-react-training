import React from 'react';

export default function BoxColor(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
          textAlign: 'center',
          margin: '1rem',
          padding: '1rem',
        }}
      >
        rgb({props.r}, {props.g}, {props.b})
      </div>
    </div>
  );
}
