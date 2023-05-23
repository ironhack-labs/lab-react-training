import './Carousel.css'
import { useState } from "react"

const Carousel = ({ images }) => {
    const [imgRendered, setImage] = useState(images[0])
    const goLeft = () => {
        if (imgRendered !== images[0]) {
            const randomImg = images[Math.floor(Math.random() * 4)]
            setImage(randomImg)
        }

    }
    const goRight = () => {
        if (imgRendered !== images[3]) {
            const randomImg = images[Math.floor(Math.random() * 4)]
            setImage(randomImg)
        }

    }

    return (
        <div className='Carousel'>
            <button onClick={goLeft}>left</button>
            <img src={imgRendered} alt="" />
            <button onClick={goRight}>right</button>
        </div>

    )

}

export default Carousel