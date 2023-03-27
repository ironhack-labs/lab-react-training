import React, { useState } from 'react'

function LikeButton() {
  const colors = ['purple','blue','green','yellow','orange','red']

  const [likes, setCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => {
     return prev + 1
    })
  }

  const divStyle = {
    background: colors[likes % colors.length],
  }

  

  return (
    <div className='m-1'>
    <button className='pl-2 text-white' onClick={handleCount} style={ divStyle }> { likes } Likes</button>
    </div>
  )
}

export default LikeButton