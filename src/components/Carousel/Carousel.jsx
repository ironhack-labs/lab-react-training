import "./Carousel.css"
import { useState } from "react";



const Carousel = (images) => {
    const [changeImage, setchangeImage] = useState(0)
    const imageArr = images.images
    const movePictureRight = () => {

        const carPos = changeImage >= imageArr.length - 1 ? changeImage - imageArr.length + 1 : changeImage + 1
        console.log(carPos)
        setchangeImage(carPos)
    }
    const movePictureLeft = () => {

        const carPos = changeImage > 0 ? changeImage - 1 : changeImage + imageArr.length - 1
        console.log(carPos)

        setchangeImage(carPos)
    }
    console.log(images.images)
    return (
        <>
            <div className="carousel"></div>
            <button onClick={movePictureLeft}>Left</button>
            <img src={imageArr[changeImage]} className="carouselImg" />

            <button onClick={movePictureRight}>Right</button>

        </>
    )
}

export default Carousel;