import React from 'react'

export default function BoxColor(props) {

    const { r, g, b, text } = props
    const style = {
        background: `rgb(${r},${g},${b})`,
        color: text
    };

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    return (
        <div class='border border-dark m-4 px-2 py-4 d-flex flex-column text-center' style={style}>
            <div>
            rgb({`${r}, ${g}, ${b}`})
            </div>
            <div>
            {rgbToHex(r, g, b)}
            </div>
            
            
        </div>
    )
}
