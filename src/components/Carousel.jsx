import { useState } from "react";

function Carousel({ images }) {
  const [imageNumber, setImageNumber] = useState(0);
  const handleLeftClick = () => {
    let imageNumberInt = Number(imageNumber);
    if (imageNumberInt == 0) {
      setImageNumber(images.length - 1);
    } else {
      setImageNumber((imageNumberInt - 1) % images.length);
    }
  };
  const handleRightClick = () => {
    let imageNumberInt = Number(imageNumber);
    setImageNumber((imageNumberInt + 1) % images.length);
  };
  return (
    <div className="Caroussel">
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[imageNumber]}></img>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;