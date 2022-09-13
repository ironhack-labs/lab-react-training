import React from 'react'
import { useState } from 'react'

function Carousel({ images }) {
  const [image, setImage] = useState(0)

  const handlePrevious = () => {
    if (image > 0) {
      setImage( image - 1)
    } else {
      setImage(image.length - 1)
    }
  }
  const handleNext = () => {
    if (image < image.length - 1) {
      setImage( image + 1)
    } else {
      setImage(0)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <div>
        <button className='btn btn-secondary btn-sm' onClick={handlePrevious}>Previous</button>
        <img src={images[image]} alt="caroussel" className='mx-3 my-5 rounded' />
        <button className='btn btn-secondary btn-sm' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Carousel