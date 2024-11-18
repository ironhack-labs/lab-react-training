import React from 'react'

function BoxColor(props) {
    const { r, g, b } = props

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    return (
        <div className="container" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            rgb({r},{g},{b})<br />
            {rgbToHex(r,g,b)}
        </div>
    )
}

export default BoxColor