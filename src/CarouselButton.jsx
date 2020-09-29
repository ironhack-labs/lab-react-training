import React from 'react'

export default function Image(props) {
    return (
      <img src={props.img} alt={props.img} className="w-100" />
    )
}