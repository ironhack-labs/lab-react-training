import React from 'react'
import './DriverCard.css'

export default function Square(props) {
  return (
    <li className="square-li" style={{ backgroundColor: props.index % 2 !== 0 ? '#FFFFFF' : '#FF0000', color: '#000' }}>
      {props.children}</li>
  )
}