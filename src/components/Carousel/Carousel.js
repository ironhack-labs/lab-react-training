import { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  let [defaultImage, setDefaultImage] = useState(0);

  return (
    <article>
      <img src={images[defaultImage]} />
      <button
        onClick={() =>
          defaultImage++ === 3
            ? setDefaultImage((defaultImage = 0))
            : setDefaultImage(defaultImage++)
        }
      >
        Right
      </button>
      <button
        onClick={() =>
          defaultImage-- === 0
            ? setDefaultImage((defaultImage = 3))
            : setDefaultImage(defaultImage--)
        }
      >
        Left
      </button>
    </article>
  );
}

export default Carousel;
