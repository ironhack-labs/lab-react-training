import { useState } from 'react';

function Carousel({ images }) {

    const [i, setI] = useState(0);

    const goRight = () => {
        if (i < images.length -1) {
            setI(i + 1);
        }
    }

    const goLeft = () => {
        if (i > 0) {
            setI(i - 1);
        }
    }

  return (
    <div>
        <button onClick={goLeft} disabled={i === 0}>Left</button>
        <img src={images[i]}/>
        <button onClick={goRight} disabled={i === images.length - 1}>Right</button>
    </div>
  )
}

export default Carousel