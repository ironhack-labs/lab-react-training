import React from 'react'


function Random(props) {
  const random = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return  (<div>
    <h3>Random value between {props.min} and {props.max} => {random}</h3>
  </div>)
}

export default Random
