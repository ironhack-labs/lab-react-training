import { useState } from 'react';

function Carousel({ images }) {
    console.log(images);
    const [imageIndex, setImageIndex] = useState(0);

    function clickHandlerLeft() {
        console.log(imageIndex);
        if (imageIndex > 0) return setImageIndex((old) => old - 1);
        setImageIndex(images.length - 1);
    }
    function clickHandlerRight() {
        console.log(imageIndex);
        if (imageIndex < images.length - 1) return setImageIndex((old) => old + 1);
        setImageIndex(0);
    }
    return (
        <div class="carousel">
            <img src={images[imageIndex]} alt="person" />
            <br />
            <button onClick={clickHandlerLeft}>Left</button>
            <button onClick={clickHandlerRight}>Right</button>
        </div>
    );
}

export default Carousel;