import { useState } from "react";

const Carousel = (props) => {
    const {images} = props
    const [i, setI] = useState(0)

    const handleLeft = () => {
        if (i === 0) {
            setI(images.lenght -1)
        }
        else {
            setI(i - 1)}
    }

    const handleRight = () => {
        if (i === images.lenght - 1) {
            setI(0)
        }
        else {
            setI(i + 1)}
    }

    return (
        <div>
            <button onClick={handleLeft}>Left</button>
            <img src={images[i]} alt='people'/>
            <button onClick={handleRight}>Right</button>
        </div>
    )
}

export default Carousel;