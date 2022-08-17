import React from 'react'

function BoxColor(props) {
    let {r, g, b} = props;
  return (
    <div>
        <p>{props.r}</p>
        <p>{props.g}</p>
        <p>{props.b}</p>
    </div>
  )
}

export default BoxColor