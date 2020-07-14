import React from 'react'

export default function BoxColor(props) {
    const divStyle = {
        background: `rgb(${props.r},${props.g},${props.b})`,
        color: `${props.color}`
    }

    return (
        <div className="box" style={divStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{props.hex}</p>
        </div>
    )
}

