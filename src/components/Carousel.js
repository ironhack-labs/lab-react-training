import { useState } from "react";

// Iteration 11 | State: Carousel
function Carousel(props) {
    const [imgIndex, setImg] = useState(0)

    const imgLeft = () => {
        setImg(imgIndex => {
            if (imgIndex === 0) {
                return imgIndex
            } else {
                return imgIndex + 1
            }
        })
    }

    const imgRight = () => {
        setImg(imgIndex => {
            if (imgIndex === 3) {
                return imgIndex
            } else {
                return imgIndex + 1
            }
        })
    }


  return (
      <div>
          <img src={props.images[imgIndex]} alt="Carousel" style={{ width: 250 }}/>
          <div className="carousel-btn">
          <button onClick={imgLeft}>Left</button>
          <button onClick={imgRight}>Right</button>
          </div>
      </div>
  );
}

export default Carousel;
