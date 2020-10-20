import React from 'react'

export default function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: '40px',
    width: '80%',
    border: '1px solid black'
  }
  
  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  )
}
