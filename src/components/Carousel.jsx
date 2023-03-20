import React, { useState, useEffect } from 'react'

export default function Carousel({ images }) {

  const [imageIndex, setImageIndex] = useState(0)

  const handleLeftClick = () => {
    setImageIndex((prev) => (prev - 3) % 4)
  }

  const handleRightClick = () => {
    setImageIndex((prev) => (prev + 1) % 4)
  }

  return (
    <div className='flex justify-center items-baseline'>
      <button className='border border-black px-3 my-2' onClick={handleLeftClick}>Left</button>
      <img src={images[Math.abs(imageIndex)]} alt="protrait" />
      <button className='border border-black px-3 my-2' onClick={handleRightClick}>Right</button>
    </div>
  )
}
