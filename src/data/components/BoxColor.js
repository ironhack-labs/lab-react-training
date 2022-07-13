import React from 'react'

export default function BoxColor({ r, g, b }) {


    let styleForColor = { backgroundColor: `rgb(${r}, ${g}, ${b})` };

    return (


        <rect width="300" height="100" style={styleForColor} />

    )
}


{/* <BoxColor r={255} g={123} b={22} /> */ }