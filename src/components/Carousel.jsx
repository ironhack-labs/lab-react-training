import React, { useState } from 'react';

function Carousel({ images }) {

  const [index, setIndex] = useState(0)

  const handleOnRightClick = () => {

    setIndex(prev => {
      if (prev >= images.length) {
        return prev = 0
      }
      else {
        return prev + 1
      }
    })
  }

  const handleOnLeftClick = () => {
    setIndex(prev => {
      if (prev <= 0) {
        return prev = images.length
      }
      else {
        return prev - 1
      }
    })
  }

  return (
    <div id="carouselExample" className="carousel slide w-25 mb-5">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images[index]} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button onClick={handleOnLeftClick} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" style={{ color: "black" }} aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button onClick={handleOnRightClick} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
};

export default Carousel;