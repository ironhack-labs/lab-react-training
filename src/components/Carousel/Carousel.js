import { useState } from "react"

function Carousel({ images }) {
    const [currentImage, setCurrentImage] = useState(0)

    
    const goLeft = () => {
        if (currentImage != 0) {
            setCurrentImage(currentImage => currentImage - 1)
        } else {
            setCurrentImage(images.length - 1)
        }

    }



    const goRight = () => {
        if (currentImage != images.length - 1) {
            setCurrentImage(currentImage => currentImage + 1)
        } else {
            setCurrentImage(0)
        }
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button onClick={() => goLeft()}>Left</button>
            <img src={images[currentImage]} />
            <button onClick={() => goRight()}>Right</button>
        </div>

    )
}

export default Carousel