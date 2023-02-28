import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    let index = 0
    const [pos, setPos] = useState(0)

    const moveUp = () => {
        pos === 3 ? setPos(0) : setPos(pos + 1)
    }
    const moveDown = () => {
        pos === 0 ? setPos(3) : setPos(pos - 1)
    }

    return (
        <>
            <button onClick={moveDown}> - </button>
            <figure>
                <img className='carousel' src={images[pos]} alt="" />
            </figure>
            <button onClick={moveUp}> + </button>
        </>
    )
}

export default Carousel