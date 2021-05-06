import React from 'react';

export default function BoxColor(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
          textAlign: 'center',
        }}
      >
        rgb({props.r}, {props.g}, {props.b})
      </div>
    </div>
  );
}
