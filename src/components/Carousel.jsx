import { useState } from "react"

function Carousel(props) {
    const { images } = props
    const [index, setIndex] = useState(0)

    // Make sure to check if the images array exists and is not empty
    const image = images && images.length > 0 ? images[index] : null

    const moveLeft = () => {
        setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const moveRight = () => {
        setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div>
            <button onClick={moveLeft}>left</button>
            {image && <img src={image} style={{ width: "100px" }} />}
            <button onClick={moveRight}>right</button>
        </div>
    )
}

export default Carousel
