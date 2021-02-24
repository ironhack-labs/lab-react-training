import React from 'react'

export default function BoxColor(props) {
  return (
    <div style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`, height: '100px', border: '1px solid', marginBottom: '10px', textAlign: 'center'}}>
      <p style={{color:'white'}}>rgb({props.r}, {props.g}, {props.b})</p>
    </div>
  )
}
