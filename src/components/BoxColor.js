import React from 'react';

export default function BoxColor(props) {
  const hex =
    '#' +
    ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b)
      .toString(16)
      .slice(1);

  return (
    <>
      <div
        style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
      >
        <p>
          rgb({props.r},{props.g},{props.b})
        </p>
        <p>{hex}</p>
      </div>
    </>
  );
}
