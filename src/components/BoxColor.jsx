import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;
    const divStyle = {
        background: `rgb(${props.r}, ${props.g}, ${props.b})`,
        height: '10vh',
        width: '30vw',
        margin: '0 0 0 520px'
      };
  return (
    <div style={divStyle}><p>RGB: ({r}, {g}, {b})</p></div>
  )
}

export default BoxColor