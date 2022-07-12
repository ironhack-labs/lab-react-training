import React from "react"; 
import "../components/css/BoxColor.css" 

const BoxColor = ({r, g, b}) => {
    const coloring = `rgb(${r}, ${g}, ${b})`

    return (
        <div className="color" style={{coloring}}>
            <p className="rgbColor">rgb({r}, {g}, {b})</p>
        </div>
    )
} 

export default BoxColor