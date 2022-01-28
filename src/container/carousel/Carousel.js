import React, {useState} from "react";

const Carousel = ( {images} ) => {
    const [index, setIndex] = useState(0);

    const handleLeftClick = () => {
        if (index !== 0) {
            setIndex(index - 1);
        } else {
            setIndex(3);
        }
    };

    const handleRightClick = () => {
        if (index !== 3) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        };
    };

    return (
        <div>
            <button onClick={handleLeftClick}>Left</button>
            <img src={images[index]} alt="carousel" />
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
};

export default Carousel;