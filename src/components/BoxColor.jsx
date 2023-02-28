import React from 'react'

function BoxColor(props) {
    const {red, green, blue} = props;
    const divStyle = {
        backgroundColor: `rgb(${red},${green},${blue} )`
    }
    function rgbToHex(r, g, b) {
      return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }

  return (

    <div style={divStyle}>
      <div>RGB({red}, {green}, {blue})</div>
      <div>{rgbToHex(red, green, blue)}</div>
    </div>
  )
}

export default BoxColor