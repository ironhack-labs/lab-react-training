import React from 'react'

function BoxColor(props) {
    const {red, green, blue} = props;
    const divStyle = {
        backgroundColor: `rgb(${red},${green},${blue} )`
    }

  return (
    <div style={divStyle}>RGB({red}, {green}, {blue})</div>
  )
}

export default BoxColor