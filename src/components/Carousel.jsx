import React, { useState } from 'react';

const Carousel = (props) => {
  const [image, setImage] = useState(0);

  return (
    <div>
      <img src={props.images[image]} />
      <button
        onClick={() =>
          setImage(image + 1 > props.images.length - 1 ? 0 : image + 1)
        }
      >
        Next
      </button>
      <button
        onClick={() =>
          setImage(image - 1 < 0 ? props.images.length - 1 : image - 1)
        }
      >
        Previous
      </button>
    </div>
  );
};

export default Carousel;
