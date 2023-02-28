import React from 'react'

function BoxColor(props) {
    const {r, g, b, hex} = props;
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }

  return (
    <div style={divStyle} className="boxColor"> rgb({r}, {g}, {b}) <br></br> {hex}</div>
  )
}

export default BoxColor