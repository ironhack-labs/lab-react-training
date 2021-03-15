import React from 'react'

function Random(props) {
  const randomValue = (Math.random() * (props.max - props.min) + props.min).toFixed();

  return (
    <div class='Box'>
      <p>Random Value between {props.min} & {props.max} =&gt; {randomValue}</p>
    </div>
  )
}

export default Random
