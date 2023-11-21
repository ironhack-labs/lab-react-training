import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [pos, setPos] = useState(0)

    const posToLeft = () => {
        if (pos > 0) {
            setPos(pos - 1)
        } else {
            setPos(images.length - 1)
        }
    }

    const posToRight = () => {
        if (pos < images.length - 1) {
            setPos(pos + 1)
        } else {
            setPos(0)
        }
    }

    return (

        <div>
            <button className="bLeft" onClick={posToLeft}>Left</button>
            < img src={images[pos]} />
            <button className="bRight" onClick={posToRight}>Right</button>
        </div>
    )
}

export default Carousel