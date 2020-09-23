import React, { Fragment } from 'react';

export default function BoxColor(props) {
  const { r, g, b } = props;

  const containerColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div style={containerColor}>
      <h1>
        RGB: {r} {g} {b}
      </h1>
    </div>
  );
}
