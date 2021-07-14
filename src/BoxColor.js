import React from 'react'

export default function BoxColor(props) {
    const style = {
        background: `rgb(${props.r},${props.g},${props.b})`
    }

    return (
        <div style={style}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}
