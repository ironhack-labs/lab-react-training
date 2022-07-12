import { useState } from "react"


const Carousel = ({ images }) => {

    const [imageValue, setImageValue] = useState(0)

    const moveRight = () => {
        let value = (imageValue + 1)
        setImageValue(value)
    }
    const moveLeft = () => {
        let value = (imageValue - 1)
        setImageValue(value)
    }

    return (
        <div>
            <button onClick={moveRight}></button>
            <img src={images[imageValue]} />
            <button onClick={moveLeft}></button>
        </div>
    )
}

export default Carousel