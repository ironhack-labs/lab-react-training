import React from 'react'
import '../assets/css/BoxColor.css'


const BoxColor = ({ r, g, b }) => {

    function RGBToHex(r, g, b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        return "#" + r + g + b;
    }


    return (
        <div className="box-color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>

            <p> rgb ({r}, {g}, {b})</p>
            <p>{RGBToHex(r, g, b)}</p>
        </div>
    )
}


export default BoxColor