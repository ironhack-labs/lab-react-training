import { useState } from 'react';

function Carousel(props) {
  let [picture, setPicture] = useState(0);

  function handleLeftClick() {
    setPicture((picture - 1 + props.images.length) % props.images.length);
  }

  function handleRightClick() {
    setPicture((picture + 1 + props.images.length) % props.images.length);
  }

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>{' '}
      <img src={props.images[picture]} alt="Carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}
export default Carousel;
