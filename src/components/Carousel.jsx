import { useState } from "react";

const Carousel = ({images}) => {

    const [image, setImage] = useState(0)

    const handleLeft = () => {
        setImage(prevImage => prevImage === 0 ? images.length - 1 : prevImage - 1)
    }

    const handleRight = () => {
        setImage(prevImage => prevImage === images.length - 1 ? 0 : prevImage + 1)
    }

    return(
        <div className="carousel">
            <button onClick={handleLeft}>Left</button>
            <img src={images[image]} alt=""/>
            <button onClick={handleRight}>Right</button>
        </div>
    )

}

export default Carousel;