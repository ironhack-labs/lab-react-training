import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }

  return (
    <div style={divStyle}> ({r}, {g}, {b})</div>
  )
}

export default BoxColor