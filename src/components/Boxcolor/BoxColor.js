import React from 'react'
import './BoxColor.css'

export default function BoxColor(props) {

    const {r, g, b} = props;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    const colorToHex = (color) => {
        let hex = color.toString(16);
        return hex.length < 2 ? '0' + hex : hex
    }

    const rgbToHex = (r, g, b) => {
        return '#' + colorToHex(r) + colorToHex(g) + colorToHex(b)
    }

    const hexColor = rgbToHex(r,g,b)

    return (
        <div className="container" style={{backgroundColor: rgbColor}}>
            <p>{rgbColor}</p>
            <p>{hexColor}</p>
        </div>
    )
}
