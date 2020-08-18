import React from 'react'

function BoxColor(props){

  let containerStyles = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  }

    return(
      <div className='iteration-card' style={containerStyles}> rgb({props.r}, {props.g}, {props.b}) <br/> #{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}</div>
    )
  }



export default BoxColor