import React from 'react';
import './BoxColor.css'

function BoxColor(props) {

    return(
        <div className='BoxColor box' style={{background: `rgb(${props.r},${props.g},${props.b})` }}>
            <p>rgb({props.r.toString()},{props.g.toString()},{props.b.toString()})</p>
        </div>
    )
}

export {BoxColor}






