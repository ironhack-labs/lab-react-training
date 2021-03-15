import React from 'react'
import "../styles/BoxColor.css";





function BoxColor(props) {
    
    return (
        <div className = "color" style = {{backgroundColor: "rgb({props.r},{props.g},{props.b})"}}>
            <p>rgb ({props.r},{props.g},{props.b}) </p>
        </div>
    )
}

export default BoxColor;
