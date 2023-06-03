import {useState} from "react";

function Carousel({images}) {
    const [index, setIndex] = useState(0);
    const goRight = () => {setIndex( (index + 1) % images.length) };
    const goLeft = () => { setIndex ( (index - 1 + images.length ) % images.length )};

  return (
    <div>
      <button onClick={goLeft}>Left</button>
      <img alt="carousel" src={images[index]}/>
      <button onClick={goRight}>Right</button>
    </div>
  )
}

export default Carousel
