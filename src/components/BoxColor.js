import React from 'react';
import '../assets/css/BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div style={divStyle} className="BoxColor">
            <div>rgb({r}, {g}, {b})</div>
        </div>
    )
}

export default BoxColor