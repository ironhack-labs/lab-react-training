// ./components/BoxColor.js

import React from 'react'

export default function BoxColor(props) {
    console.log("props:",props)

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
      };

  return (
    <div style={divStyle}>rgb({props.r},{props.g},{props.b})</div>
  )
}
