import { useState } from 'react';
function Carousel(props) {
    const [carouselIndex, setCarousel] = useState(0)

    // How can I refactor this?

    const carouselRight = () => {
        setCarousel(carouselIndex => {
            if (carouselIndex === 3) return carouselIndex - 3
            return carouselIndex + 1
        })

    }

    const carouselLeft = () => {
        setCarousel(carouselIndex => {
            if (carouselIndex === 0) return carouselIndex + 3
            return carouselIndex - 1
        })

    }
    return (
        <div>
            <button onClick={carouselLeft}>Left</button>
            <img src={props.images[carouselIndex]} alt='user carousel' />
            <button onClick={carouselRight}>Right</button>
        </div>
    )
}
export default Carousel;