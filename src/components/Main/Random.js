// ./components/Random.js

import React from 'react'

export default function Random(props) {
    console.log("props:",props)

    const random = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return (
    <div className='boxGeneric'>
        <p>Random value between {props.min} and {props.max} => {random}</p>
    </div>
  )
}