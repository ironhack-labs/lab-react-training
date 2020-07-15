import React from 'react'

function BoxColor(props) {
    const divStyle = {
        background: `rgb(${props.r},${props.g},${props.b})`,
        color: `${props.color}`
    }

    return (
        <div style={divStyle} >
            <p>RGB ({props.r}, {props.g},{props.b})</p>
            <p>{props.hex}</p>
        </div>
    )

}

export default BoxColor