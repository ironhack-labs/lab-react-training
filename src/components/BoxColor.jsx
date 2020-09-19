import React from 'react'

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
    return (
        <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})`, width: '400px', height: '200px', color:`${props.color}` }}>
            <p>rbg({props.r}, {props.g}, {props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div >
    )
}

export default BoxColor