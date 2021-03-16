import React from 'react';
import './../views/Blackborder.css';

const BoxColor = ({r, g, b}) => {
    const RGBToHex = (r,g,b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length === 1) r = "0" + r;
        if (g.length === 1) g = "0" + g;
        if (b.length === 1) b = "0" + b;
      
        return "#" + r + g + b;
    }

    const hexColor = RGBToHex(r, g, b);

    return (
        <div style= {
            {backgroundColor: `rgb(${r}, ${g}, ${b})`}
        } 
        className="BoxColor">
            <p>rgb({r},{g},{b})</p>
            <p>{hexColor}</p>
        </div>
    )
}

export default BoxColor
