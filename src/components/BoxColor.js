import '../style/BoxColor.css'
import React from 'react';

function BoxColor(props) {
    return(
        <div 
        style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}
        className="BoxColor">
           <h4>rgb({props.r},{props.g},{props.b}</h4>
        </div>
    )
}

export default BoxColor;