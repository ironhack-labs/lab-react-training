import { useState } from 'react';

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  function previousImage() {
    currentImage === 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage(currentImage - 1);
  }

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <section className="carousel">
      <img src={images[currentImage]} alt="whatever" />
      <button onClick={previousImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
    </section>
  );
}

export default Carousel;
