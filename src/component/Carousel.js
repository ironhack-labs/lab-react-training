import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex(currentImageIndex === images.length -1 ? 0 : currentImageIndex + 1);
    };

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
            <div>
                <button className="carousel-button-prev" onClick={handlePrevClick}>
                    Prev
                </button>
                <button className="carousel-button-next" onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel; 