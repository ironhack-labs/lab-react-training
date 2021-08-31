import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const divStyle = {
    'background-color' : `rgb(${props.r},${props.g}, ${props.b})`,
    'border' : '1px solid black'
  }

  return(
    <div className='BoxColor' style={divStyle}>
      <h4>rgb({props.r}, {props.g}, {props.b})</h4>
    </div>
  )
}

export default BoxColor