

import "./Carousel.css"
import { useState } from "react"

const Carousel = ({ images }) => {


    const [idx, setImage] = useState(0)


    const handleChangeNext = () => {

        if (idx < images.length - 1) {
            setImage(idx + 1)
        }

    }

    const handleChangePrev = () => {

        if (idx > 0) {
            setImage(idx - 1)
        }

    }

    return (
        <div className="Carousel">
            <button onClick={handleChangePrev}>Prev</button>
            <img src={images[idx]} alt="" />
            <button onClick={handleChangeNext}>Next</button>
        </div>
    )
}


export default Carousel