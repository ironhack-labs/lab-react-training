import React from 'react'

function BoxColor(props) {
    const{r, g, b} = props
    
    const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: 30,
    }

  return (
    <div style={divStyle}> rgb({r}, {g}, {b}) </div>
  )
}

export default BoxColor