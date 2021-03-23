import React from 'react'
import '../assets/css/BoxColor.css'

const BoxColor = ({r,g,b}) => {

  const styleColor ={
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

    return (
      <div  style={styleColor} className="BoxColor">
       <div>rgb({r}, {g}, {b})</div>
      </div>
    )
  }

export default BoxColor 