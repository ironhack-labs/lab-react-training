import React from 'react';

export default function BoxColor(props) {
  let { r, g, b } = props;
  return (
    <div className="container">
      <h3
        className="card"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          height: '50px',
        }}
      >
        rgb({props.r}, {props.g}, {props.b})
      </h3>
    </div>
  );
}
