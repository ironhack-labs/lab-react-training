import React from 'react'

const BoxColor = ({r,g,b}) => {
    const divStyle = {
        backgroundColor:`rgb(${r} ${g} ${b})`,
        width: '200px', 
        height: '200px',
        
      };
      console.log(divStyle)
  return (
    <div style={divStyle}>Boxcolor</div>
  )
}

export default BoxColor