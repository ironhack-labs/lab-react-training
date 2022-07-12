import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {


    const [carouselValue, setCarousel] = useState(0)

    const left = () => {
        carouselValue > 0 ? setCarousel(carouselValue - 1) : setCarousel(3)
    }

    const rigth = () => {
        carouselValue < 3 ? setCarousel(carouselValue + 1) : setCarousel(0)
    }

    return (

        <section>
            <button onClick={left}>Left</button>
            <img src={images[carouselValue]} alt="" />
            <button onClick={rigth}>Rigth</button>
        </section>


    )

}

export default Carousel