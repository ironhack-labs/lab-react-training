import React from 'react'

function BoxColor(props) {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      };

    return (
        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, border:"1px solid black", width:400, height:100, margin:5}}>
           <h2>rgb({props.r},{props.g},{props.b})</h2>
            <h2>{rgbToHex(props.r,props.g,props.b)}</h2>
        </div>
    )
}

export default BoxColor
