import React, { useState } from 'react'



function Carousel({ images }) {
  const [index, setIndex] = useState(0)

  const handleClickLeft = () => {
    setIndex(prev => prev <= 0 ? prev = images.length - 1 : (prev - 1) % images.length)
  }

  const handleClickRight = () => {
    setIndex(prev => prev = (prev + 1) % images.length)
  }




  return (
    <div id="carouselExample" className="carousel slide m-3">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images[index]} className="rounded-4" style={{ width: 300 }} alt="pictures" />
        </div>
      </div>
      <button className="carousel-control-prev" onClick={handleClickLeft} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleClickRight} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel