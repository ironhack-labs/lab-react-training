import React from 'react';

export default function BoxColor(props) {

    function rgbToHex(rgb) {
     let hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      };
      return hex;
    };

    function fullColorHex(r,g,b) {
        let red = rgbToHex(r);
        let green = rgbToHex(g);
        let blue = rgbToHex(b);
        return red+green+blue;
    };

let fullHex = fullColorHex(props.r,props.g,props.b);



  return (
    <div
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
      className="boxColor"
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>#{fullHex}</p>
    </div>
  );
}
