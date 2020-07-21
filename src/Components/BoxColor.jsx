import React from 'react';
import './../App.css';

const BoxColor = (props) => {
  function rgbGate(r, g, b) {
    return 'rgb(`${props.r.toString()}, ${props.g.toString()}, ${props.b.toString()}`)';
  }
  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${props.r.toString()}, ${props.g.toString()}, ${props.b.toString()})`,
      }}
    >
      rgb({props.r},{props.g},{props.b})
    </div>
  );
};
export default BoxColor;
