import './Carousel.css'
import { useState } from "react"

let arrayCountPosition = 0


const Carousel = ({ images }) => {

    const [portrait, setPortrait] = useState(images[0])
    const changeImage = (direction) => {

        if (arrayCountPosition === 0 && direction === 'left') {
            arrayCountPosition = 4
        } else if (arrayCountPosition === 3 && direction === 'right') {
            arrayCountPosition = -1
        }
        direction === 'left' ? arrayCountPosition-- : arrayCountPosition++


        setPortrait(images[arrayCountPosition])
    }

    return (
        <div className="carousel" >
            <button onClick={() => changeImage('left')}>Left</button>
            <img src={portrait} alt="image" />
            <button onClick={() => changeImage('right')}>Right</button>
        </div>
    )
}

export default Carousel