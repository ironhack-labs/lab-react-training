import React from 'react';
import './BoxColor.css';

// https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
const converter = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const BoxColor = ({r, g, b}) => {
    return (
        <div className="container" style={{ backgroundColor: converter(r, g, b) }}>
            rgb({r}, {g}, {b}) <br></br> {converter(r, g, b)}
        </div>
    )
}

export default BoxColor;