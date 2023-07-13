import React from 'react'

export default function BoxColor( {r, g, b}) {
const divStyle = {
    backgroundColor: `rgb( ${r}, ${g}, ${b} )`, // remember to add $ in interpolation
    width:"500px",
    height:"100px"
}

  return (
    <div style={divStyle}>

    </div>
  )
}
