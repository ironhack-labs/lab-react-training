import { useState } from "react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickLeft = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
 
  const handleClickRight = () => setCurrentImageIndex((prevIndex) =>(prevIndex + 1) % images.length);


  return (
    <div>
      <button onClick={handleClickLeft}>Left</button>
      <img src={images[currentImageIndex]} style={{width:"200px"}}></img>
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
}

export default Carousel;
