import React from 'react';
function BoxColor (props) {

    const {r, g, b} = props;
    const pStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        border: "solid 3px black"
    }


    function valueToHex(c) {
        var hex = c.toString(16);
        return hex  
    }

    function rgbToHex(r, g, b) {
        return(valueToHex(r) + valueToHex(g) + valueToHex(b));  
    }

   return (
    <div style={pStyle}>
        <p>rgb({r}, {g}, {b}) #{rgbToHex(r, g, b)}</p>
    </div>

   )
}
export default BoxColor