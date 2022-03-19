import React from 'react'
import './BoxColor.css'

const BoxColor = ( {r, g, b} ) => {

    const RGBToHex = (r,g,b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length === 1) r = "0" + r;
        if (g.length === 1) g = "0" + g;
        if (b.length === 1) b = "0" + b;
      
        return "#" + r + g + b;
    }

    return (
        <div className='boxcolor border d-flex justify-content-center align-items-center mb-3' 
              style={ {backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`} }>

            <div>
                <p className='bold'>rgb({`${r}, ${g}, ${b}`})</p>
                <p className='bold'>{RGBToHex(r,g,b)}</p>
            </div>
        </div>
    )
}

export default BoxColor