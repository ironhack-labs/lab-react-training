import { useState } from "react";

function Carousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handlePrevious = () => {
        setImageIndex(prevIndex => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    }

    const handleNext = () => {
        setImageIndex(prevIndex => {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
    }

    return (
        <div>
            <button onClick={handlePrevious}>Left</button>
            <img src={images[imageIndex]}/>
            <button onClick={handleNext}>Right</button>
        </div>
    );
}

export default Carousel;