import { useState } from "react"

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0)

    function previousImage() {
        currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1)
    }

    function nextImage() {
        setCurrentImage((currentImage + 1) % images.length)
    }

    return (
        <section className="Carousel">
            <img src={images[currentImage]} alt="person image" />
            <button onClick={previousImage}>Left</button>
            <button onClick={nextImage}>Rigth</button>
        </section>
    )
}

export default Carousel