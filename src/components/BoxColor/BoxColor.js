import React from "react";
import './BoxColor.css'

const BoxColor = (props) =>{
const { r, g, b } = props;
return(
    <div className="boxColorDiv" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
        <p>rgb({r}, {g}, {b})</p>
        
    </div>
    )
}

export default BoxColor;