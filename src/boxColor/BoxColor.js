import React from 'react'

export default function BoxColor(props) {
    return (
        <div className="color-box" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            <h2>
                rgb({props.r},{props.g},{props.b})
            </h2>
        </div>
    )
}
