import React from 'react'

const countRandom = (a, b) => {
    return (a + Math.floor((Math.random() * (b - a))))
}

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
