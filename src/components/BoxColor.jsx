import React from 'react';
import "./../styles/BoxColor.css";


function BoxColor(props) {
    return (
         <h3 
         id="BoxColor" class="borderClass" style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`}} >rgb({props.r},{props.g},{props.b})
         </h3>
    )
}

export default BoxColor
