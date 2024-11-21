import React from "react";

let BoxColor = ({r, g, b}) => {
    let color = (`rgb(${r}, ${g}, ${b})`);
    return (
    <div style={{backgroundColor: color, width:100, height:100}}>
        <p>{color}</p>
    </div>
    )
}

export default BoxColor