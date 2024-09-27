import { useState } from "react"
import './Carousel.css'

const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0)

    const handleClickLeft = () => {
        if (index === 0) {
            setIndex(index)
        } else {
            setIndex(index - 1)
        }
    }

    const handleClickRight = () => {
        if (index === 3) {
            setIndex(index)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div className="buttonImage">
            <button
                onClick={handleClickLeft}
            >Anterior</button>
            <button
                onClick={handleClickRight}
            >Siguiente</button>
            <hr></hr>
            <img className="images"
                src={images[index]}>

            </img>
        </div>

    )
}

export default Carousel