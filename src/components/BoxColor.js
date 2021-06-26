import React from 'react'

export default function BoxColor({ r, g, b, text }) {

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
        <div class='boxColor' style={style}>
            <div className='text-box'>
            rgb({`${r}, ${g}, ${b}`})
            </div>
            <div className='text-box1'>
            {rgbToHex(r, g, b)}
            </div>
            
            
        </div>
    )
}
