import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const divStyle = {
    background: `rgb(${props.r},${props.g},${props.b})`,
  };

  return (
    <div>
      <h1>Box Color</h1>
      <div className="box-color">
        <p id="rgb">
          rgb({props.r},{props.g},{props.b})
        </p>
        <p id="hex" style={divStyle}>
          Hex
        </p>
      </div>
    </div>
  );
};

export default BoxColor;
