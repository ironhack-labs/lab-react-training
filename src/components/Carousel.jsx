import { useState } from 'react';

function Carousel(props) {
  console.log(props.images);

  const [img, setImg] = useState(props.images[0]);

  return (
    <div>
      <button
        onClick={() => {
          setImg(props.images[1]);
        }}
      >
        Left
      </button>
      <img src={img} alt="diferent imgs" />
      <button
        onClick={() => {
          setImg(props.images[0]);
        }}
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
