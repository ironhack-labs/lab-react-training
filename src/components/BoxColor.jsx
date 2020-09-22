import React from 'react';
import './BoxColor.css'

function BoxColor(props) {

    function RGBToHex(r,g,b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
        return "#" + r + g + b;
      }

    return (
        <div className= 'containerColor' style= {{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`}}>
            <p className='BoxColor'> rgb({props.r}, {props.g}, {props.b})</p>
            <p className='BoxColor'>{RGBToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor