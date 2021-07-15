import React, { useState } from 'react';

function Carousel({images}) {
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0)

    const changeImage = direction => {
        if (direction === "left") {
            if (currentImageIndex > 0) {
                setCurrentImageIndex(prevCurrentImageIndex => prevCurrentImageIndex - 1)
            }
            else {
                setCurrentImageIndex(images.length - 1);
            }
        }
        if (direction === "right") {
            if (currentImageIndex < images.length - 1) {
                setCurrentImageIndex(prevCurrentImageIndex => prevCurrentImageIndex + 1)
            }
            else {
                setCurrentImageIndex(0);
            }
        }
    }

    return (
        <div>
            <button onClick={() => changeImage('left')}>Left</button>
            <img src={images[currentImageIndex]} alt="Random person"></img>
            <button onClick={() => changeImage('right')}>Right</button>
        </div>
    )
}

export default Carousel;
