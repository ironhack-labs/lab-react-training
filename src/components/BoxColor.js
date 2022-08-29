import React from 'react';

function BoxColor(props) {
    function rgbToHex(value) {
        let hex = Number(value).toString(16)
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex
    }

    function fullColorHex({ r, g, b}) {
        const red = rgbToHex(r)
        const green = rgbToHex(g)
        const blue = rgbToHex(b)

        return '#' + red + green + blue
    }

    return (
        <div className="box-container box-color"
        style={{
            backgroundColor: fullColorHex({ r: props.r, g: props.g, b: props.b}),
        }}
    >
      <p> rgb ({`${props.r},${props.g}, ${props.b}`})</p>

      <p>{fullColorHex({ r: props.r, g: props.g, b: props.b })}</p>
    </div>
  );
}

export default BoxColor;