import React from 'react';
import './boxColor.css';

function Random(props) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const hexColor = rgbToHex(props.r, props.g, props.b);

  return (
    <div style={{ background: hexColor }} className="the-border box-color">
      <div className="box-div">
        <h3>
          rgb({props.r}, {props.g}, {props.b})
        </h3>
        <h3>{hexColor}</h3>{' '}
      </div>
    </div>
  );
}

export default Random;
