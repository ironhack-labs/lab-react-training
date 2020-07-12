import React from 'react'

export default function BoxColor(props) {
    return (
        <div
            className="text-in-border"
            style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}
        >
            {props.children}
        </div>
    )
}
