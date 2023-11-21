import { useState } from "react"

const Carousel = ({ images }) => {

    const [image, setImage] = useState(0)

    const moveLeft = () => {
        (image === 0) ? setImage(images.length - 1) : setImage(image - 1)

    }
    const moveRight = () => {
        (image < images.length - 1) ? setImage(image + 1) : setImage(0)
    }

    return (
        <div className="carouselCard">
            <button onClick={moveLeft}>Left</button>
            <img src={images[image]} alt="photo" />
            <button onClick={moveRight}>Right</button>

        </div>
    )

}

export default Carousel