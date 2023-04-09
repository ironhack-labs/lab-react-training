import { useState } from "react";

function Carousel({images}) {
    const [imageIndex, setImageIndex] = useState(0)

    const currentImage = images[imageIndex % images.length]

    function leftClick() {
        console.log(imageIndex)
        setImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
    }

    function rightClick() {
        setImageIndex(prev => prev + 1)
    }

    return (
        <div className="carouselDiv">
            <button onClick={leftClick}>Left</button>
            <img src={currentImage} alt="" />
            <button onClick={rightClick}>Right</button>
        </div>
    )
}

export default Carousel;