import { useState } from "react"

const Carousel = ({ images }) => {

    const [click, setClick] = useState(0)

    const moveLeft = () => {
        click === 0 ? setClick(3) : setClick(click - 1)
    }

    const moveRight = () => {
        click === 3 ? setClick(0) : setClick(click + 1)
    }

    return (
        <>
            <button onClick={moveLeft}>Left</button>
            <img src={images[click]} alt="" />
            <button onClick={moveRight}>Right</button>
        </>
    )

}

export default Carousel