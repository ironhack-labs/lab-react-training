import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <button onClick={handlePrev}> Previous </button>
            <img src={images[currentIndex]} alt="" />
            <button onClick={handleNext}> Next </button>
        </>
    );
};

export default Carousel;
