import React from 'react'


function BoxColor(props) {
    console.log(props);

    const divStyle = {
        // rgb(255, 255, 255)
        background: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ")",
        border: "2px solid #000",
        width: "200px",
        height: "100px"
    };

    return (
        <div style={divStyle}>
            rgb({props.r},{props.g},{props.b})
            <br />
            {ConvertRGBtoHex(props.r,props.g,props.b)};
        </div>
    )
}

// Inside of JSX
// - {} -> JS
// - !{} -> HTML


function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

export default BoxColor
