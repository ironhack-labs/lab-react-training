import React from 'react'

function BoxColor(props) {

    const boxStyles = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }

    const rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };

      var fullColorHex = function(r,g,b) {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
      };

    return (
        <div className="box-color" style={boxStyles}>
            <span className="box-span">rgb({props.r},{props.g},{props.b}) #{fullColorHex(props.r,props.g,props.b)}</span>
        </div>
    )
}

export default BoxColor