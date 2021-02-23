import React from 'react'

export default function BoxColor(props) {
    const color = `rgb(${props.r},${props.g},${props.b})`
    return (
        <div style={{ backgroundColor: color, width: '400px', height: '80px', color: 'white', border:'2px solid black'}}>{color}</div>
    )
}
