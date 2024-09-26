import { useState } from "react"

const Carousel = ({ images }) => {
    const [clicked, setClicked] = useState(0)

    const nextImage = () => {
        setClicked(clicked + 1)
    }
    const previousImage = () => {
        setClicked(clicked - 1)
    }
    return (
        <>
            <button onClick={previousImage}>Previous</button>
            <img src={images[clicked]} alt="" />
            <button onClick={nextImage}>Next</button>
        </>
    )
}
export default Carousel