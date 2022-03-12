import { useState } from 'react';
let atualIndex = 0;

function Carousel(props) {
  const [img, setImg] = useState(props.images[atualIndex]);

  function handleLeftClick() {
    if (atualIndex === 0) {
      atualIndex = 3;
      setImg(props.images[atualIndex]);
    } else {
      atualIndex = atualIndex - 1;
      setImg(props.images[atualIndex]);
    }
  }

  function handleRightClick() {
    if (atualIndex === 3) {
      atualIndex = 0;
      setImg(props.images[atualIndex]);
    } else {
      atualIndex = atualIndex + 1;
      setImg(props.images[atualIndex]);
    }
  }

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={img} alt="carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;
