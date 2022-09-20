import { useState } from 'react';
function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const right = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    }

    const left = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    }

    return (
        <div>
            <button onClick={left}>Left</button>
            <img src={images[index]} alt="carousel" />
            <button onClick={right}>Right</button>
        </div>
    );
}
export default Carousel;
