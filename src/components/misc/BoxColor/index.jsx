import "./index.css";
import React from 'react';

function BoxColor ({ r, g, b }) {
    function rgbToHex(red, green, blue) {
        return '#' + ((1 << 24) + (red << 16) + (green <<8) + blue).toString(16).slice(1);
    }
    const divStyle = {
        backgroundColor: rgbToHex(r, g, b)
    };
    return (
        <div className="boxcolor-container" style={divStyle}>
            <h3>rgb({r},{g},{b})</h3>
            <h3>{rgbToHex(r, g, b)}</h3>
        </div>
    )
};


export default BoxColor;