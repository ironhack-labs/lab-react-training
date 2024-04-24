import React, { useState } from "react";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImageLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const changeImageRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="Carousel">
            <button className="left" onClick={changeImageLeft}>Left</button>
            <img src={images[currentIndex]} alt="Images" />
            <button className="right" onClick={changeImageRight}>Right</button>
        </div>
    );
}

export default Carousel;
