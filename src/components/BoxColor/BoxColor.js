import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
    let style = { backgroundColor: `rgb(${props.r},${props.g},${props.b})` }
    return(
        <div>
            <p className="box-color" style={style}>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export {BoxColor};