import React from 'react'

export default function BoxColor(props) {
    return (
        <div>
            <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`, width: "200px", height: "100px", textAlign: "center"}}>rgb({props.r}, {props.g}, {props.b})</div>
        </div>
    )
}
