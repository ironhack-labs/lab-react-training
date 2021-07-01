import React, { useState } from 'react';

import './Carousel.css';

const Carousel = ({images, title}) => {
    const [count, setCount] = useState(0);
    return (
      <article className="Carousel">
        <h2>{title}</h2>
        <section className="Carousel__wrapper">
          <button
            onClick={() => setCount((prevCount) => prevCount - 1)}
            disabled={count === 0}
          >
            <p> ⇇ </p>
          </button>
          <div className="Carousel_img__wrapper">
            <img src={images[count]} alt="" />
          </div>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            disabled={count === images.length - 1}
          >
            <p> ⇶ </p>
          </button>
        </section>
      </article>
    );
}
 
export default Carousel;