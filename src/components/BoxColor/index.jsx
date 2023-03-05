import React from 'react';
import './index.css'

function valueHex (color) {
    const hex = color.toString(16)
    return hex
}

function rgbtoHex (r, g, b) {
    return "#" + valueHex(r) + valueHex(g) + valueHex(b);
}

function BoxColor ({r, g, b}) {
    return (
        <div className='BoxColor' style={{backgroundColor:`rgb(${r},${g},${b})`}}>
            <p>rgb({r},{g},{b})</p>
            <p>{rgbtoHex({r},{g},{b})}</p>
        </div>
    );  
};

export default BoxColor;