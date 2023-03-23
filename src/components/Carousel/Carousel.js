import React, { useState } from 'react'

function Carousel({ images }) {

  const [imageArr, setImageArr] = useState(images[Math.floor(Math.random() * images.length)])

  const handlePrevious = () => {
    setImageArr((prevImage) => {
      let index = images.indexOf(prevImage)
      if (index <= 0) {
        index = images.length - 1
      } else {
        index--
      }
      return images[index]
    })
  }

  const handleNext = () => {
    setImageArr((prevImage) => {
      let index = images.indexOf(prevImage)
      if (index === images.length - 1) {
        index = 0
      } else {
        index++
      }
      return images[index]
    })
  }

  return (
    <div>
      <button onClick={handlePrevious}>🢀</button>
      <img src={imageArr} alt="" height='350' className='mx-4' />
      <button onClick={handleNext}>🢂</button>
    </div>
  )
}

export default Carousel