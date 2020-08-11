import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return (
      '#' +
      componentToHex(props.r) +
      componentToHex(props.g) +
      componentToHex(props.b)
    );
  }

  return (
    <div className="boxcolor" style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{rgbToHex((props.r, props.g, props.b))}</p>
    </div>
  );
};

export default BoxColor;
