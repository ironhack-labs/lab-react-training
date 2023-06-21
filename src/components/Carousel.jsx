import { useState } from 'react';

export default function Carousel(props) {
  const { images } = props;

  const [imgSrc, setImgSrc] = useState(images[0]);

  const handleIncrementImg = () => {
    const currentImgIndex = images.indexOf(imgSrc);
    if (currentImgIndex < images.length - 1) {
      setImgSrc(images[currentImgIndex + 1]);
    }
  };

  const handleDecrementImg = () => {
    const currentImgIndex = images.indexOf(imgSrc);
    if (currentImgIndex > 0) {
      setImgSrc(images[currentImgIndex - 1]);
    }
  };

  return (
    <div className="carousel">
      <img src={imgSrc} alt="carousel" width="320" />
      <img
        onClick={handleIncrementImg}
        className="carousel__arrow carousel__arrow-right"
        src="/images/chevron-droit.png"
        alt="right arrow"
      />
      <img
        onClick={handleDecrementImg}
        className="carousel__arrow carousel__arrow-left"
        src="/images/chevron-gauche.png"
        alt="chevron gauche"
      />
    </div>
  );
}
