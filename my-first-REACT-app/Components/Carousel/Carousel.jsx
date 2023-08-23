import { useState } from 'react'


const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const handleImageLeft = () => {

        setCurrentImage(currentImage - 1)

    }

    const handleImageRight = () => {

        setCurrentImage(currentImage + 1)

    }

    return (
        <>
            <div>
                <button onClick={handleImageLeft}>Left</button>
                <button onClick={handleImageRight}>Right</button>


                <img src={images[currentImage]} alt="carousel" style={{ width: '100%', height: 'auto' }} />
            </div>
        </>
    )
}

export default Carousel