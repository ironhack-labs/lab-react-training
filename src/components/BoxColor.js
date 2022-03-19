import React from 'react'

export default function BoxColor({r,g,b}) {

    const rgb = `rgb(${r},${g},${b})`;

    const style = {
        border:"1px solid Black", 
        height : "100px",
        width: "400px",
        backgroundColor : rgb,
        textAlign : 'center',
        padding : "10px",
        marginTop : "10px",
        color : "white"
        }

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
        }).join('')  

    let hex = rgbToHex(r,g,b)

  return (
    <div style={style}> 
    <p>{rgb} </p>
    <p>{hex}</p>
    </div>
  )
}
