import { useState } from "react"




const Carousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousPicture = () => {
        currentIndex > 0 ? setCurrentIndex((prev) => prev - 1) : setCurrentIndex(images.length - 1)
    }

    const nextPicture = () => {
        currentIndex < images.length - 1 ? setCurrentIndex((next) => next + 1) : setCurrentIndex(0)
    }


    return (
        <section>
            <button onClick={previousPicture}>Left</button>
            <img src={images[currentIndex]} />
            <button onClick={nextPicture}>Right</button>
        </section>

    )

}

export default Carousel