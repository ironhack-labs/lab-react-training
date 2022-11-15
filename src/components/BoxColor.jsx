import React from 'react'

function BoxColor(props) {

  const color = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  } 

  return (
    <div>
        <div style={color} >
          <p>rgb: ({props.r},{props.g},{props.b})</p>
        </div>
    </div>
  )
}

export default BoxColor