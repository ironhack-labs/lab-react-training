import { useState } from "react"

const Carousel = ({ images }) => {

    const [pictureIndex, setPictureIndex] = useState(0)

    const handleNext = () => {
        pictureIndex !== images.length - 1 ? setPictureIndex(pictureIndex + 1) : setPictureIndex(0)
    }

    const handlePrev = () => {
        pictureIndex !== 0 ? setPictureIndex(pictureIndex - 1) : setPictureIndex(images.length - 1)
    }


    return (
        <>
            <button onClick={handlePrev}> PREVIOUS </button>
            <img src={images[pictureIndex]} alt="img" />
            <button onClick={handleNext}> NEXT </button>
        </>
    )
}

export default Carousel