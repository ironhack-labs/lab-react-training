import { useState } from "react"
import './Carousel.css'

const Carousel = ({ images }) => {

    const [imagesList, setImagesList] = useState(images[0])

    // const imgArr = [...images]
    // setImagesList(imgArr)
    let position = images.indexOf(imagesList)

    const moveLeft = () => {

        setImagesList(images[1])
        if (position >= 1) position--
        setImagesList(images[position])



    }

    const moveRight = () => {
        if (position < 3) position++
        setImagesList(images[position])
    }

    return (
        <>
            <div className="carousel">
                <button onClick={moveLeft}>Left</button>
                <img src={imagesList}></img>

                <button onClick={moveRight}>Right</button>
            </div>

        </>
    )

}

export default Carousel