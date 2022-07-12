import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [position, setPosition] = useState(0)

    const moveLeft = () => position > 0 ? setPosition(position - 1) : setPosition(3)
    const moveRight = () => position < 3 ? setPosition(position + 1) : setPosition(0)


    return (
        <>
            <button className='btn' onClick={moveLeft}>left</button>
            <img src={images[position]} alt="image" />
            <button className='btn' onClick={moveRight}>right</button>
        </>

    )

}

export default Carousel