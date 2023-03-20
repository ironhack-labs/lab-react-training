import React, { useEffect, useState } from 'react'

function Carousel({ images }) {

  const [imageArr, setImageArr] = useState(images)
  function randomImage() {
    return imageArr[Math.floor(Math.random() * imageArr.length)]
  }

  const handlePrevious = () => {}

  const handleNext = () => {}

  useEffect(() => {
    setImageArr(randomImage())
  }, [])

  return (
    <div>
      <button onClick={handlePrevious}>🢀</button>
      <img src={imageArr} alt="" height='350' className='mx-4' />
      <button onClick={handleNext}>🢂</button>
    </div>
  )
}

export default Carousel