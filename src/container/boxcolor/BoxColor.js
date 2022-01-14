import React from "react";
import "./BoxColor.css";

const BoxColor = ( {r, g, b, textColor} ) => {
    const rgbToHex = (red, green, blue) => {
        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);
      
        if (red.length === 1) {
            red = "0" + red;
        }
        if (green.length === 1) {
            green = "0" + green;
        }
        if (blue.length === 1) {
            blue = "0" + blue;
        }
      
        return `#${red}${green}${blue}`;
    };

    return (
        <div className="BoxColor" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <p style={{color: textColor}}>
                rgb({r}, {g}, {b})<br />
                {rgbToHex(r, g, b)}
            </p>
        </div>);
};

export default BoxColor;