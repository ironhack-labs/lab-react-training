import React from 'react';
import "./Boxcolor.css";
import "../../App.css";
function BoxColor(props) {
    let {r, g, b} = props
    

    let  boxColor = `rgb(${r},${g},${b})`;
    
    return (
        <div style={{backgroundColor: boxColor}} className='colorBox' >
            {boxColor}
        </div>
    );
}

export default BoxColor;
