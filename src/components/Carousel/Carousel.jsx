import { useState } from "react"

const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)

    const goLeft = () => {
        index > 0 ? setIndex(index - 1) : setIndex(images.length - 1)
    }

    const goRight = () => {
        index < images.length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    return (
        <div>
            <img src={images[index]} alt="carrousel-image" />
            <button onClick={goLeft}>left</button>
            <button onClick={goRight}>right</button>
        </div>
    )
}

export default Carousel