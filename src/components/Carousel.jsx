import { useState } from 'react';

function Carousel(props) {
  const [indexNumber, setIndexNumber] = useState(1);
  const [img, setImg] = useState(props.images[indexNumber]);
  console.log(indexNumber);
  return (
    <div>
      <button
        onClick={() => {
          if (indexNumber >= 1) {
            setIndexNumber(indexNumber - 1);
          }
          setImg(props.images[indexNumber]);
        }}
      >
        Left
      </button>
      <img src={img} alt="diferent imgs" />
      <button
        onClick={() => {
          if (indexNumber < props.images.length - 1) {
            setIndexNumber(indexNumber + 1);
          }
          setImg(props.images[indexNumber]);
        }}
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
