import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const imagesLength = images.length
    const [indexValue, setIndexValue] = useState(0)

    function handleClickBack() {
        let index = (indexValue + imagesLength - 1) % imagesLength
        setIndexValue(index)
    }
    function handleClickForward() {
        let index = (indexValue + 1) % imagesLength
        setIndexValue(index)
    }
    return (
        <div className="carousel">
            <button className="carousel-back" onClick={handleClickBack}>
                Left
            </button>
            <img className="carousel-img" src={images[indexValue]} />
            <button className="carousel-forward" onClick={handleClickForward}>
                Right
            </button>
        </div>
    );
}
export default Carousel













