import './Carousel.css'
import { useState } from 'react'

const initialValue = 0

const Carousel = ({ images }) => {

    const [carouselIndex, setCarousel] = useState(initialValue)

    const decrementCarouselValue = () => {

        carouselIndex === 0 ? setCarousel(images.length - 1) : setCarousel(carouselIndex - 1)
    }

    const incrementCarouselValue = () => {

        carouselIndex === images.length - 1 ? setCarousel(initialValue) : setCarousel(carouselIndex + 1)
    }

    return (
        <div className="Carousel">
            <button onClick={decrementCarouselValue}> Left </button>
            <img src={images[carouselIndex]} alt="carousel" />
            <button onClick={incrementCarouselValue}> Right </button>
        </div>
    )
}

export default Carousel
