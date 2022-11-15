import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;
    const divStyle = {
        background: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: "25vw",
        height: "10vh",
        margin: "0 0 0 530px"
    }
  return (
    <div><h1 style={divStyle}>rgb: ({r}, {g}, {b})</h1></div>
  )
}

export default BoxColor;