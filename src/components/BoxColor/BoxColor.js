import React from 'react';

import './BoxColor.css';

const BoxColor = (
    {
        r,
        g,
        b
    }
) => {
    const setBackgroundColor = (r, g, b) => {
        return(`rgb(${r}, ${g}, ${b})`);
    }

    function componentToHex(c) {
        let hex = c.toString(16);
        if(hex.length === 1) {
            return "0" + hex 
        }
        else {
           return hex;
      }
    }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    return(
        <div style={{ backgroundColor: setBackgroundColor(r, g, b) }}>
        <p>
            rgb({r}, {g}, {b})
        </p>
        <p>
            {rgbToHex(r, g, b)}
        </p>
        </div>
    );
}

export default BoxColor;