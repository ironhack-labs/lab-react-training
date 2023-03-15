import React, { useState } from 'react'

function LikeButton() {

  const [count, setCount] = useState(0)

  const handleCountUp = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  const [countTwo, setCountTwo] = useState(0)

  const handleCountUpTwo = () => {
    setCountTwo((prevCount) => {
      return prevCount + 1
    })
  }

  let like
  if (count === 1) {
    like = 'Like'
  } else {
    like = 'Likes'
  }

  let likeTwo
  if (countTwo === 1) {
    likeTwo = 'Like'
  } else {
    likeTwo = 'Likes'
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

  const [index2, setIndex2] = useState(0)

  const handleChangeColor2 = () => {
    setIndex2((prevIndex) => {
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

  const buttonStyle2 = {
    width : 100,
    margin : 10,
    backgroundColor: color[index2],
    color: 'white'
  }

  return (
    <div className='mb-4'>
      <button onClick={() => { handleCountUp(); handleChangeColor() }} style={buttonStyle} >{count} {like}</button>
      <button onClick={() => { handleCountUpTwo(); handleChangeColor2() }} style={buttonStyle2} >{countTwo} {likeTwo}</button>
    </div>
  )
}

export default LikeButton