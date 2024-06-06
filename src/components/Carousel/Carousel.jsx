import { useState } from 'react';

export default function Carousel({ images }) {
  const [image1, image2, image3, image4] = images;
  const [currentImg, setCurrentImg] = useState(image1);

  const handleChangeRight = () => {
    const currentIndex = images.indexOf(currentImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImg(images[nextIndex]);
  };

  const handleChangeLeft = () => {
    const currentIndex = images.indexOf(currentImg);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImg(images[prevIndex]);
  };

  return (
    <div>
      <div className="container-carousel">
        <button className="btn-carousel" onClick={handleChangeLeft}>
          {'<'}
        </button>
        <img src={currentImg} alt="" />
        <button className="btn-carousel" onClick={handleChangeRight}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
