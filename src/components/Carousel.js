import React, { useState } from 'react';

const Carousel = ({ imgs }) => {
    const [currentIndex, changeImage] = useState(0);

    const checkIndex = (direction) => {
        return direction === 'next'
        ? (currentIndex + 1) % imgs.length
        : (((currentIndex - 1) % imgs.length)+imgs.length)%imgs.length;
    }

    return (
        <div>
            <img src={imgs[currentIndex]} alt={currentIndex} />
            <button onClick={() => {
                changeImage(checkIndex('prev'));
            }}>
                Prev
            </button>
            <button onClick={() => {
                changeImage(checkIndex('next'));
            }}>
                Next
            </button>
        </div>
    );
}

export default Carousel;
