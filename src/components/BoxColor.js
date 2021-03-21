import React from 'react';
import '../assets/css/BoxColor.css'

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div className='boxcolor' style={divStyle}>
            <h1>{`rgb(${r}, ${g}, ${b})`}</h1>
            <h1>{`${rgbToHex(r, g, b)}`}</h1>
        </div>
    )
}


export default BoxColor;


