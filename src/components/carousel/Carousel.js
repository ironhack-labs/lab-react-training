import React from 'react'
import { useState } from 'react'

function Carousel({ images }) {
  const [image, setImage] = useState(0)

  const handlePrevius = () => {
    if (image > 0) {
      setImage( image - 1)
    } else {
      setImage(3)
    }
  }
  const handleNext = () => {
    if (image < 3) {
      setImage( image + 1)
    } else {
      setImage(0)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <div>
        <button className='btn btn-secondary btn-sm' onClick={handlePrevius}>Previus</button>
        <img src={images[image]} alt="caroussel" className='mx-3 my-5 rounded' />
        <button className='btn btn-secondary btn-sm' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Carousel