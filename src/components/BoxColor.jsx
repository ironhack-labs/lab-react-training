import React from 'react';

const BoxColor = (props) => {
  let divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  let toHex = (x) => {
    var hex = x.toString(16);
    if (hex.length < 2) {
      return (hex = '0' + hex);
    } else {
      return hex;
    }
  };

  return (
    <div className="boxcolor" style={divStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <br />
      <p>
        {' '}
        #{toHex(props.r)}
        {toHex(props.g)}
        {toHex(props.b)}
      </p>
    </div>
  );
};

export default BoxColor;
