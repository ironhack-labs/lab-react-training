import { useState } from "react"

const Carousel = ({ images }) => {

    const [image, setImage] = useState(0)

    const increment = () => {
        if (image == images.length - 1) {
            setImage(0)
        } else {
            setImage(image + 1)
        }
    }

    const decrement = () => {
        if (image == 0) {
            setImage(images.length - 1)
        } else {
            setImage(image - 1)
        }
    }

    return (
        <div className="Carousel">
            <button onClick={increment}></button>
            <img src={images[image]} alt="" />
            <button onClick={decrement}></button>
        </div>
    )

}

export default Carousel