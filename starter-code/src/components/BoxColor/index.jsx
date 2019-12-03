import React from 'react'
import './style.scss'


function BoxColor(props) {
const boxStyle = {
  color: 'white',
  backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  border: '1px solid black',
  width: '70em',
  textAlign: 'center'
}

  return (
      <div className="box" style={boxStyle}>
      <h3>rgb({props.r},{props.g},{props.b})</h3>
    </div>
  )
}

export default BoxColor
