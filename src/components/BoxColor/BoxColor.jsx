import React from 'react'

function BoxColor(props) {
  return (
    <div style={{backgroundColor: (`${props.r} ${props.g} ${props.b}`)}}></div>
  )
}

export default BoxColor