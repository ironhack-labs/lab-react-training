import React from 'react';

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}   

function BoxColor(props) {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`, 
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        border: '1px solid',
    };
    return (
        <div style={divStyle}>
            <span>rgb({props.r}, {props.g}, {props.b})</span>
            <span>{rgbToHex(parseInt(props.r), parseInt(props.g), parseInt(props.b))}</span>
        </div>
    )
}

export default BoxColor;