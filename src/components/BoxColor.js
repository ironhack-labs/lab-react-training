import React from 'react'
import './BoxColor.css';

function rgbConversor(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    return "#" + r + g + b;
};

function BoxColor(props) {
    const hex =  rgbConversor(props.r, props.g, props.b)
       return (
        <div className="BoxColorContainer" style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,color: "white"}}>
            <p>rgb ({props.r},{props.g}, {props.b})</p>
            <p>{hex}</p>
        </div>
    );
};

export default BoxColor;