import './Carousel.css'
import { useState } from 'react'


function Carousel({ images }) {

    const [carouselIdx, setCarouselIdx] = useState(0)
    const carouselRoll = (increment) => {
        return (carouselIdx + increment + 4) % 4
    }


    return (
        <div><button onClick={() => setCarouselIdx(carouselRoll(1))}>boton 1
        </button>
            <button onClick={() => setCarouselIdx(carouselRoll(-1))}>boton 2
            </button>
            <img src={images[carouselIdx]} alt="" />
        </div>
    )

}


export default Carousel