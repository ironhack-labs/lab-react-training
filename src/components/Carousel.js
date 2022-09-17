import { useState } from 'react';

function Carousel(props) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setIndex(index === 0 ? props.images.length - 1 : index - 1);
        }}
      >
        Left
      </button>
      <img src={props.images[index % props.images.length]} alt="carousel" />
      <button
        onClick={() => {
          setIndex(index === props.images.length - 1 ? 0 : index + 1);
        }}
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
