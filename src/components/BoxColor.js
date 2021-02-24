import React from 'react'

export default function BoxColor(props) {

    function componentToHex(c) {
        let hex = c.toString(16)
        return hex.length == 1? "0" + hex : hex
    }

    function rgbToHex(r,g,b) {
        return "#" + componentToHex(r)+componentToHex(g)+componentToHex(b)
    }

    const color= {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
}
    return (
        <div className="box" style={color}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r,props.g,props.b)}</p>
        </div>
    )
}
