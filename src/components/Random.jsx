import React from 'react'

function Random(props) {
  const resultado=Math.floor(Math.random() * props.max) + props.min;
    return (
    <div>
         <p>Random Value between {props.min} and {props.max}={resultado}</p>
    </div>
  )
}

export default Random