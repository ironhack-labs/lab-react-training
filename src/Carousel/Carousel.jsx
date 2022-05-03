import { useState } from 'react';

const Carousel = ({ images }) => {
  let index = 0;

  const [imageIndex, setImageIndex] = useState(index);

  const changeRigth = () => {
    if (imageIndex < images.length -1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };
  const changeLeft = () => {
    if (imageIndex > 0 ) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(images.length - 1);
    }
  };

  return (
    <div>
      <div>
        <img src={images[imageIndex]} alt="photo" />
      </div>
      <button onClick={changeLeft}>Left</button>
      <button onClick={changeRigth}>right</button>
    </div>
  );
};

export default Carousel;
