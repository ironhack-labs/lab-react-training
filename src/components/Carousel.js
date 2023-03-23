import React, { useState } from 'react'

export default function Carousel({ images }) {

  const [imageIndex, setImageIndex] = useState(0)

  const handleClick = (offset) => {
    setImageIndex(prev => {
      const next = prev + offset

      if (next > images.length - 1) {
        return 0
      }
      if (next < 0) {
        return images.length - 1
      }
      return next
    })
  }

  return (
    <div className='flex justify-center items-baseline'>
      <button className='border border-black px-3 my-2' onClick={() => handleClick(-1)}>Left</button>
      <img src={images[imageIndex]} alt="portrait" />
      <button className='border border-black px-3 my-2' onClick={() => handleClick(1)}>Right</button>
    </div>
  )
}