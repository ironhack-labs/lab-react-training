import React from 'react'
import './boxColor.css'

const BoxColor =({r, g, b}) => {
    return(
      <div className="BoxColor" 
      style = {{ background: `rgb(${r}, ${g}, ${b})`}} >
      <p>rgb({r}, {g}, {b})</p>
      </div>
    )
  }

  export default BoxColor