import React from 'react';
import './IdCard.css';

function BoxColor(props) {

    let style = { backgroundColor: `rgb(${props.r},${props.g},${props.b})` }

    return (
        <div clasName='box'>
        <p style={style}>rgb ({props.r}, {props.g}, {props.b})</p>

        </div>
    )
}

export default BoxColor;