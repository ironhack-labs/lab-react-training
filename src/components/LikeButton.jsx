import React, { useState } from 'react'

const bgColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']


export default function LikeButton() {

  const [likes, setLikes] = useState(0)
  const [bgColor, setBgColor] = useState(bgColors[likes % 6])

  const handleIncreaseLikes = () => {
    setLikes((prev) => {
      return (prev + 1)
    })
    setBgColor(bgColors[(likes + 1) % 6])
  }

  return (
    <button className='border border-black px-3 my-2' style={{ backgroundColor: bgColor }} onClick={handleIncreaseLikes}>
      {likes} Likes
    </button>
  )
}
