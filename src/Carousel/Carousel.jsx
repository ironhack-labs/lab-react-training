import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [image, changeImage] = useState(images[0])

    const imageArr = [...images]

    let position = imageArr.indexOf(image)


    const changeLeft = () => {
        if (position <= 3 && position > 0) position--
        changeImage(imageArr[position])
    }

    const changeRight = () => {
        if (position >= 0 && position < 3) position++
        changeImage(imageArr[position])
    }

    return (
        <>
            <img src={image} alt="photo" />
            <br />
            <button onClick={changeLeft}>Left</button>
            <button onClick={changeRight}>Right</button>
        </>
    )
}

export default Carousel