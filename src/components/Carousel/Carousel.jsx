import { useState } from 'react'
import './Carousel.css'

function Carousel({ images }) {
    let len = images.length
    let [currentIndex, setIndex] = useState(0)
    function handleClickBack() {
        let index = (currentIndex + len - 1) % len
        setIndex(index)
    }
    function handleClickForward() {
        let index = (currentIndex + 1) % len
        setIndex(index)
    }
    return (
        <div className="carousel">
            <button className="carousel-back" onClick={handleClickBack}>
                👈
            </button>
            <img className="carousel-img" src={images[currentIndex]} alt="" />
            <button className="carousel-forward" onClick={handleClickForward}>
                👉
            </button>
        </div>
    )
}
export default Carousel