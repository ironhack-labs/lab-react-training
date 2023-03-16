import React, { useState } from 'react'

function LikeButton() {

  const [count, setCount] = useState(0)

  const colors = ['purple','blue','green','yellow','orange','red']

  const handleCount = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  const setColor = () => {
    console.log('count > ', count)
    console.log(count - (Math.round(count/colors.length)))
    return colors[count - (Math.ceil(count/colors.length))]
  }

  return (
    <button type="button" className="btn btn-primary" style={{backgroundColor: `${setColor()}`}} onClick={handleCount}>{count} Likes</button>
  )
}

export default LikeButton