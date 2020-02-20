import React from 'react';

const Box = props => {
    return (
        <div className = "BoxColor box" style={{color: props.color, background: "rgb("+props.r+","+props.g+","+props.b+")"}} >
            rgb(
                    {props.r},
                    {props.g},
                    {props.b})
                    <br></br>#{fullColorHex(props.r, props.g, props.b)}
        </div>
    )
}

var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };

  var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };



export default Box;