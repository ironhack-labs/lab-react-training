import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [currentIndex, selectIndex] = useState(0)

    const incrementIndex = () => {
        if (currentIndex === images.length - 1) {
            selectIndex(0)
        }
        else {
            selectIndex(currentIndex + 1)
        }
    }

    const decrementIndex = () => {
        if (currentIndex === 0) {
            selectIndex(images.length - 1)
        }
        else {
            selectIndex(currentIndex - 1)
        }
    }

    return (
        <div className="Carousel">
            <button onClick={decrementIndex}>LEFT</button>
            <img src={images[currentIndex]} alt="image" />
            <button onClick={incrementIndex}>RIGHT</button>
        </div>
    )
}
export default Carousel