import React from 'react'

export default function BoxColor(props) {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`;

    return (
        <div style={{backgroundColor: color}}>{color}</div>
    )
}
