import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const divStyle = {
    background: `rgb(${props.r},${props.g},${props.b})`,
  };

  return (
    <div className="box-color">
      <p id="rgb">
        rgb({props.r},{props.g},{props.b})
      </p>
      <p id="hex" style={divStyle}>
        Hex
      </p>
    </div>
  );
};

export default BoxColor;
