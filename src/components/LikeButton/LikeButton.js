import React, { useState } from 'react'

function LikeButton() {

  const [count, setCount] = useState(0)

  const handleCountUp = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  let like
  if (count === 1) {
    like = 'Like'
  } else {
    like = 'Likes'
  }

  const color = ['purple','blue','green','yellow','orange','red'];

  const [index, setIndex] = useState(0)

  const handleChangeColor = () => {
    setIndex((prevIndex) => {
      if (prevIndex === color.length - 1) {
        prevIndex = 0
      } else {
        prevIndex = prevIndex + 1
      }
      return prevIndex
    })
  }

  const buttonStyle = {
    width : 100,
    margin : 10,
    backgroundColor: color[index],
    color: 'white'
  }

  return (
    <div className='mb-4'>
      <button onClick={() => { handleCountUp(); handleChangeColor() }} style={buttonStyle} >{count} {like}</button>
    </div>
  )
}

export default LikeButton