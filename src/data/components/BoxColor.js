import React from 'react'

export default function BoxColor({ r, g, b }) {

    // let styleForColor = `rgb(${r}, ${g}, ${b})`;


    const divStyle = {
        width: 200,
        height:70,
        backgroundColor:  `rgb(${r}, ${g}, ${b})`
    };

    return (
        <div style={divStyle} />

    )
}

