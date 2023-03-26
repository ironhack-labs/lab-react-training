import React from 'react'

function Carousel({ images }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">        
        {images.map((image, index) => <div key={image} className={`d-flex justify-content-center carousel-item${index === 0 ? ' active': ''}`}><img src={image} className="d-block" style={{width: '30%'}} alt="..." /></div>)}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel