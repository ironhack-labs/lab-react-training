import { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  const [count, setCount] = useState(0);

  function handleLeftClick(params) {
    if (count <= 0) {
      setCount(images.length - 1);
      return;
    }

    setCount(count - 1);
  }

  function handleRightClick(params) {
    if (count === images.length - 1) {
      setCount(0);
      return;
    }

    setCount(count + 1);
  }

  return (
    <div>
      <img src={images[count]} alt="img" />
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
    </div>
  );
}

export default Carousel;
