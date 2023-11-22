import { useState } from "react"

const Carousel = ({ images }) => {

    const [pic, setPic] = useState(0)

    function picRight() {
        if (pic < images.length - 1) {
            setPic(pic + 1)
        } else {
            setPic(0)
        }
    }

    function picLeft() {
        if (pic != 0) {
            setPic(pic - 1)
        } else {
            setPic(images.length - 1)
        }
    }

    return (

        <div>
            <button onClick={picLeft}>⬅</button>
            <img src={images[pic]} alt="pic" />
            <button onClick={picRight}>⮕</button>
        </div>

    )
}

export default Carousel