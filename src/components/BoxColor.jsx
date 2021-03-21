import React from 'react'
import '../assets/scss/BoxColor.scss'

const BoxColor = ({ r, g, b, color}) => {
    const divStyle = {
        color,
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div style={divStyle} className="BoxColor">
            <span>rgb({r} {g} {b})</span>
            <span>{ rgbToHex(r, g, b) }</span>
        </div>
    )
}

export default BoxColor
