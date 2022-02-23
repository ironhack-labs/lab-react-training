import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    let [imageIndex, setImageIndex] = useState(0)


    return (
        <article className='carousel'>
            <img src={images[imageIndex]} alt="pic" />
            <br />

            <button className='button' onClick={() =>
                imageIndex-- === 0 ? setImageIndex(imageIndex = 3) : setImageIndex(imageIndex--)
            }>Left</button>

            <button className='button' onClick={() =>
                imageIndex++ === 3 ? setImageIndex(imageIndex = 0) : setImageIndex(imageIndex++)
            }>Right</button>

        </article>
    )

}

export default Carousel