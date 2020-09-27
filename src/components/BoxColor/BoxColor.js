import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const clrRGB =
    (props.r === 0 ? '00' : props.r.toString(16)) +
    (props.g === 0 ? '00' : props.g.toString(16)) +
    (props.b === 0 ? '00' : props.b.toString(16));

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>#{clrRGB}</p>
    </div>
  );
};

export default BoxColor;
