import { useState } from "react"
import './Carousel.css'

const Carousel = ({ images }) => {

    let [indexImage, setIndexImage] = useState(0)


    return (
        <>
            <div className="Carousel">

                <img src={images[indexImage]} />

                <div className="carouselButtons">
                    <button onClick={() => indexImage + 1 === 3 ? setIndexImage(indexImage = 0) : setIndexImage(indexImage++)}>Left</button>
                    <button onClick={() => indexImage - 1 === 0 ? setIndexImage(indexImage = 4) : setIndexImage(indexImage--)}>Rigth</button>
                </div>
            </div>
        </>
    )
}

export default Carousel