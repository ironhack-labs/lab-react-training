import React from "react";
import "./BoxColor.css"

  
const BoxColor = (props) => {
    let r = props.r;
    let g = props.g;
    let b = props.b;

    const divStyle = {backgroundColor: `rgb(${r},${g},${b})`} 
     
    return (
        <div style={divStyle} className='BoxColor' >
            rgb({r},{g},{b})
        </div>
    );
}

export default BoxColor;