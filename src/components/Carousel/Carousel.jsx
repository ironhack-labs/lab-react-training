import './Carousel.css'
import { useState } from 'react'

const Carousel = ({ images }) => {

    const [image, setImage] = useState(0)

    //console.log(image.images[0])

    let right = () => {
        let number = image + 1
        setImage(number)

    }

    let left = () => {
        let number = image - 1
        setImage(number)
    }

    return (
        <div>
            <button onClick={left}>left</button>
            <img src={images[image]} alt="" />
            <button onClick={right}>right</button>
        </div>

    )
}

export default Carousel

