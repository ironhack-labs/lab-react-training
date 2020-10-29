import React from 'react';
import './BoxColor.css';

const BoxColor = ({r, g, b}) =>{

    const divStyle = {
        background: `rgb(${r},${g},${b})`,
      };
    //const getRandom = Math.floor((Math.random() * max) + min);
    const rgbToHex = (rgb) => { 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };

    const hexColor = "#" +rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
    console.log(hexColor);

    return (
        <div class="BoxColor" style={divStyle}>
            <p>RGB({r},{g},{b}) </p>
            <p>{hexColor}</p>
        </div>
    );
};

export default BoxColor;
