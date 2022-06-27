import React from 'react'

const Random = (props) => {
const random = Math.floor(props.min + Math.random() * (props.max - props.min));
  return (
    <div>Random value between 1 and 50 is {random}</div>
  )
}

export default Random