import React from 'react';
import "../App.css";

function BoxColor(props) {
    return (
        <div className="ColorBox" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
           rgb({props.r},{props.g},{props.b})
        </div>
    )
}

export default BoxColor
