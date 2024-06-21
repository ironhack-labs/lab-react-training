import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)

    const prevImg = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const nextImg = () => {
        if (index < images.length - 1) {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <button
                onClick={prevImg}
            >Prev</button>
            <img className='CarrouselImg' src={images[index]} alt="" />
            <button
                onClick={nextImg}
            >Next</button>
        </>
    )
}
export default Carousel