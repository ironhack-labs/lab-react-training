function Carousel({ images }){

  const imagesCarousel = [];
  for (let i = 0; i < images.length; i++){
    imagesCarousel.push(
      <div key={images[i]} className={`carousel-item ${!i ? 'active' : ''}`}>
        <img src={images[i]} className="d-block w-100" alt="Imagen 1" />
      </div>
    )
  }

  return (
    <div id="carouselControls" className="carousel slide mb-5 w-50" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagesCarousel}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;