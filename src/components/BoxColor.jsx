import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props
    const divStyle ={
        background: ` rgb(${props.r}, ${props.g}, ${props.b})`,
        height: "10vh",
        width: "30vw",
        margin:'0 0 0 35vw' 
    }
  return (
    <div style = {divStyle}>
        <h1>RGB = ({r}, {g}, {b})</h1>
    </div>
  )
}

export default BoxColor