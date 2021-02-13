import React, { useState } from 'react';

export default function Carousel(props) {
  const { imgs } = props;
  const [image, setImage] = useState(imgs[0]);

  const handleBack = () => {
    const max = imgs.length -1
    const currentIndex = imgs.indexOf(image)
    if (image === imgs[0]) {
      setImage(imgs[max]);
    } else {
      setImage(imgs[currentIndex-1]);
    }
  };

  const handleForward = () => {
    const max = imgs.length - 1;
    const currentIndex = imgs.indexOf(image);
    if (image === imgs[max]) {
      setImage(imgs[0]);
    } else {
      setImage(imgs[currentIndex + 1]);
    }
  };

  return (
    <div>
      <button onClick={handleBack}> back </button>
      <img src={image} />
      <button onClick={handleForward}> forward </button>
    </div>
  );
}
