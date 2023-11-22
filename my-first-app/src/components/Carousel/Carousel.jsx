import { useState } from "react"
const Carousel = ({ images }) => {

    const [imagesCar, setImagesCar] = useState(0)

    const incrementImages = () => {
        if (imagesCar >= 0) {
            setImagesCar(imagesCar + 1)

        } else {
            setImagesCar(0)
        }
    }

    const decrementImages = () => {

        if (imagesCar <= 4) {
            setImagesCar(imagesCar - 1)

        } else {
            setImagesCar(4)
        }
    }
    return (
        <>
            <button onClick={decrementImages}>LEFT</button>
            <img src={images[imagesCar]} alt="" />
            <button onClick={incrementImages}>RIGHT</button>
        </>
    )
}
export default Carousel