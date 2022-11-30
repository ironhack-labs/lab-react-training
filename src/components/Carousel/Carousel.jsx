import { useState } from 'react'

const Carousel = (props) => {
    const { images } = props

    const [imgIndex, setImgIndex] = useState(0)

    const handleButtonLeft = () => {
        imgIndex < 1 ? setImgIndex(3) : setImgIndex(imgIndex - 1)
    }

    const handleButtonRight = () => {
        imgIndex >= images.length - 1 ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    }


    return (
        <div>
            <button onClick={handleButtonLeft}>Left</button>
            <img src={props.images[imgIndex]} alt="" />
            <button onClick={handleButtonRight}>Right</button>
        </div>
    )

}

export default Carousel