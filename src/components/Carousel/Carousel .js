import { useState } from "react"

const Carousel = (props) => {
    const { images } = props;
    
    const [currentPos, setCurrentPos] = useState(0);

    let currentImage = images[currentPos]

    const rightButoon = () => {
        
        currentPos !== images.length - 1
            ? setCurrentPos(currentPos + 1) : setCurrentPos(0)

    }

    const leftButton = () => {
        currentPos !== 0
            ? setCurrentPos(currentPos - 1) : setCurrentPos(images.length - 1)
    }

    return (
        <div>
            <button onClick={leftButton} > Left </button>
            <img src={currentImage} alt="carrusel" />
            <button onClick={rightButoon} > Right </button>
        </div>
    )
}

export default Carousel