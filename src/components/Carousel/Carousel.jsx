import { useState } from 'react';
import './Carousel.css'

const Carousel = ({ images }) => {

    const [carouselPic, setCarouselPic] = useState(0)

    function rightMove() {
        carouselPic < images.length - 1 ? setCarouselPic(carouselPic + 1)
            : setCarouselPic(0)
    }

    const leftMove = () => {
        carouselPic >= 1 ? setCarouselPic(carouselPic - 1)
            : setCarouselPic(0)
    }

    return (
        <section>
            <button value='left' onClick={leftMove}>Left</button>
            <img src={images[carouselPic]} alt="Current image" />
            <button value='right' onClick={rightMove}>Right</button>
        </section>
    )
}

export default Carousel