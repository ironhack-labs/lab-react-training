import React from 'react'

// eslint-disable-next-line react/prop-types
export default function BoxColor({r, g, b}) {
  
 const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    textAlign: "center"
 }


  return (
    <div className="text-box" style= {divStyle}>
        <p>rgb ({r}, {g}, {b})</p>
    </div>
  )
}
