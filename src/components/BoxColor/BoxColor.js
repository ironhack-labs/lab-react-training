import React from 'react'

function BoxColor({r, g, b}) {

  const rgb = `rgb(${r}, ${g}, ${b})`

  const styleColor = {
    backgroundColor: rgb,
  }

  return (
    <div style={styleColor}>BoxColor {r}, {g}, {b} </div>
  )
}

export default BoxColor