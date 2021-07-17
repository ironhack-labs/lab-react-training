import React from "react";

function BoxColor({r, g, b}){
    const componentToHex = color =>{
        let hex = color.toString(16);
        return hex.length === 1? "0" + hex : hex;
    }

    const rgbToHex = color => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    return (
        <div className="interation-container color-container" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}>
            <h6> rgb({r}, {g}, {b}) </h6>
            <h6> {rgbToHex} </h6>
        </div>

    )
}