import './Carousel.css';
import { useState } from "react";

const Carousel = ({ images }) => {

    const [carouselImg, setcarouselImg] = useState(images[Math.floor(Math.random() * images.length)]);

    const handleRight = () => {
        setcarouselImg(images[Math.floor(Math.random() * images.length)])
    }
    const handleLeft = () => {
        setcarouselImg(images[Math.floor(Math.random() * images.length)])
    }

    return (
        <div className="carousel-container">
            <button onClick={handleLeft}>Left</button>
            <img src={carouselImg} alt="" />
            <button onClick={handleRight}>Right</button>
        </div>
    );
}

export default Carousel;