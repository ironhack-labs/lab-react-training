import './Carousel.css'
import { useState } from 'react';



const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        const newImage =
            (currentImage - 1 + images.length) % images.length;
        setCurrentImage(newImage);
    };

    const nextImage = () => {
        const newImage = (currentImage + 1) % images.length;
        setCurrentImage(newImage);
    };

    return (
        <div className='Carousel'>
            <button onClick={previousImage}>Previous</button>
            <img src={images[currentImage]} alt="carousel" />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};



export default Carousel;