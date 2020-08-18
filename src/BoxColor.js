import React from 'react'

export default function BoxColor(props) {
    return (
        <div>
            <canvas style={{background:'rgb(' + props.r + ',' + props.g + ',' + props.b + ')'}} width="400" height="100"></canvas>
        </div>
    )
}
