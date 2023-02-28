import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [indexImg, setIndexImg] = useState(0)

    const clickLeft = () => {
        if (indexImg === 0) {
            setIndexImg(images.length - 1)
        } else {
            setIndexImg(indexImg - 1)
        }
    }
    const clickRight = () => {
        if (indexImg === images.length - 1) {
            setIndexImg(0)
        } else {
            setIndexImg(indexImg + 1)
        }
    }

    return <div>
        <button onClick={clickLeft}>Left</button>
        <img className='Carousel' src={images[indexImg]} alt="carousel" />
        <button onClick={clickRight}>Right</button>
    </div>
}

export default Carousel