import { useState } from 'react';

function Carousel(props) {
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const { images } = props;

const handleLeftClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
}

const handleRightClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
}

return (
    <div>
    <button onClick={handleLeftClick}>Left</button>
    <img src={images[currentImageIndex]} alt="carousel" />
    <button onClick={handleRightClick}>Right</button>
    </div>
);
}

export default Carousel;

