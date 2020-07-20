import React from 'react';

const BoxColor = (props) => {
  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  function fullHexCode() {
    let red = rgbToHex(props.r);
    let green = rgbToHex(props.g);
    let blue = rgbToHex(props.b);
    return `#${red}${green}${blue}`;
  }

  //   function color() {
  //     return ? "white" : "black";
  //   }

  return (
    <div
      className="boxColor"
      style={{
        backgroundColor: fullHexCode(),
        // color: color(),
      }}
    >
      <span>
        rgb({props.r}, {props.g}, {props.b})<br />
        {fullHexCode()}
      </span>
    </div>
  );
};

export default BoxColor;
