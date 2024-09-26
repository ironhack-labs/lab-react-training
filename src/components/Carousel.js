import { useState } from 'react';

function Carousel(props) {
  let i = 0;
  const [carouselImg, setCarouselImg] = useState(props.images[i]);

  return (
    <div className="carousel">
      <img src={carouselImg} alt="carousel img"></img>
      <div className="myButtons">
        <button className="myButtons">Previous</button>
        <button
          className="myButtons"
          onClick={() => {
            if (i === 0) {
              i = 1;
              setCarouselImg(props.images[1]);
            } else if (i === 1) {
              i = 2;
              setCarouselImg(props.images[2]);
            } else if (i === 2) {
              i = 3;
              setCarouselImg(props.images[3]);
            } else if (i === 3) {
              i = 4;
              setCarouselImg(props.images[0]);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
