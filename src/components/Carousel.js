import React, {useState} from "react";

const Carousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1 );
    };

    const handleNextClick = () => {
        setCurrentImage((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1 );
    };

    return (
        <div>
            <img src={images[currentImage]} alt={`Image ${currentImage}`}/>
            <button onClick={handlePrevClick}>Left</button>
            <button onClick={handleNextClick}>Right</button>
        </div>
    );
};

export default Carousel;