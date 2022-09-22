import { useState } from 'react';

function Carousel({ images }) {
  console.log(images);
  const [imgIndex, setImgIndex] = useState(0);
  console.log(imgIndex);

  //   function checkIndex(direction) {
  //     if (direction === "back") {
  //         imgIndex < 1 ? setImgIndex(images.length - 1) : setImgIndex(imgIndex-1)
  //       }
  //     }
  //     if (index === images.length) {
  //       return setImgIndex(0);
  //     }
  //   }

  function left() {
    const newIndex = imgIndex - 1;
    if (newIndex < 0) {
      return setImgIndex(images.length - 1);
    }
    return setImgIndex(imgIndex - 1);
  }

  function right() {
    const newIndex = imgIndex + 1;
    if (newIndex === images.length) {
      return setImgIndex(0);
    }
    return setImgIndex(imgIndex + 1);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={() => {
          left();
        }}
      >
        back
      </button>
      <img src={images[imgIndex % images.length]} alt="portrait"></img>
      <button
        onClick={() => {
          right();
        }}
      >
        next
      </button>
    </div>
  );
}

export default Carousel;
