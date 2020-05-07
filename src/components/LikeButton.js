import React from 'react'

const LikeButton = (props) => {
  return (
    <div>
      <button onClick={props.increment}> {props.counter} Likes</button>
    </div>
  )
}

export default LikeButton