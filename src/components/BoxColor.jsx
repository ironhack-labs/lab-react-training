import React from 'react'

function BoxColor(props) {

    const{r,g,b} = props
    const divStyle = {
        width: "700px",
        height: "100px",
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: "5px solid #282c34",
        margin: "10px"
    }

  return (

    <div style={divStyle}> rgb({r},{g},{b})</div>
  )
}

export default BoxColor