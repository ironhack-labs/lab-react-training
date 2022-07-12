import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {
    const [pictureIndex, setPictureIndex] = useState(0)
    const carouserHandler = (direction) => {
        if (direction === '<') {
            if (pictureIndex === 0) {
                setPictureIndex(images.length - 1)
            } else {
                setPictureIndex(pictureIndex - 1)
            }
        } else if (direction === '>') {
            if (pictureIndex === images.length - 1) {
                setPictureIndex(0)
            } else {
                setPictureIndex(pictureIndex + 1)
            }

        }
    }
    return (
        <figure className='Carousel'>
            <button onClick={() => carouserHandler('<')}>{'<'}</button>
            <img src={images[pictureIndex]} alt="" />
            <button onClick={() => carouserHandler('>')}> {'>'}</button>
        </figure>
    )
}

export default Carousel