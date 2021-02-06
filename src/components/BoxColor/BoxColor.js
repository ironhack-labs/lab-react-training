import React from 'react';

function BoxColor(props) {
    let style = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`}

    return (
        <div className='box'>
            <p style={style}>rgb ({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor;