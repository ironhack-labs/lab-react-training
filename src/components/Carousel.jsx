import { useState } from 'react';
let imageIndex = 0;

function Carousel(props) {
  const { images } = props;
  //   console.log(link1);

  const [currentLink, setCurrentLink] = useState(images[imageIndex]);

  const changeImage = (direction) => {
    if (direction === 1) {
      if (imageIndex !== images.length - 1) {
        imageIndex++;
        setCurrentLink(images[imageIndex]);
      }
    } else {
      if (imageIndex !== 0) {
        imageIndex--;
        setCurrentLink(images[imageIndex]);
      }
    }
  };

  return (
    <div id="carousel-container">
      <button
        className="carousel-button"
        onClick={() => {
          changeImage(0);
        }}
      >
        Left
      </button>
      <img src={currentLink} alt="" />
      <button
        className="carousel-button"
        onClick={() => {
          changeImage(1);
        }}
      >
        Right
      </button>
    </div>
  );
}
export default Carousel;
