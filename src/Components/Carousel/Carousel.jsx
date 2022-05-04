import { useState } from 'react'

const Carousel = ({ images }) => {

    const [CarouselValue, setCarousel] = useState(0);

    const iz = () => {

        if (CarouselValue > 0) {
            setCarousel(CarouselValue - 1);
        } else {
            setCarousel(0);
        }
    }
    const de = () => {

        if (CarouselValue < 3) {
            setCarousel(CarouselValue + 1);
        } else {
            setCarousel(3);
        }
    }
    return (

        <div>
            <button onClick={iz}>Izquierda</button>
            <img src={images[CarouselValue]}></img>
            <button onClick={de}>Derecha</button>
        </div>


    )
}

export default Carousel