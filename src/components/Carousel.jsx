import { useState } from 'react';

export default function Carousel(props) {
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(props.images[index]);

  const handleClickLeft = () => {
    index === 0 ? setIndex(props.images.length - 1) : setIndex(index - 1);
    setShowImage(props.images[index]);
  };

  const handleClickRight = () => {
    index === props.images.length - 1 ? setIndex(0) : setIndex(index + 1);
    setShowImage(props.images[index]);
  };

  return (
    <div>
      <button onClick={() => handleClickLeft()}>Left</button>
      <img src={showImage} alt="Profile" />
      <button onClick={() => handleClickRight()}>Right</button>
    </div>
  );
}
