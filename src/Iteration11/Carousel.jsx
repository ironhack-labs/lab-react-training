import { useState } from 'react'

const Carousel = ({ images }) => {

    const [imageValue, setImageValue] = useState(0)

    let moveRight = () => {
        let value = imageValue + 1
        setImageValue(value)
    }

    let moveLeft = () => {
        let value = imageValue - 1
        setImageValue(value)
    }


    return (
        <div>
            <button onClick={moveLeft}>⬅️</button>
            <img src={images[imageValue]} alt="pic" />
            <button onClick={moveRight}>➡️</button>
        </div>
    )

}

export default Carousel