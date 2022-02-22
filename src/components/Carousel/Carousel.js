import { useState } from "react";

const Carousel = ({ images }) => {

    let [index, setImageIndex] = useState(0)

    let [imageValue, setImageValue] = useState(images[index])

    const clickRight = () => {
        index++
        setImageValue(images[index])
        setImageIndex(index++)
        if (index === 5) {
            setImageValue(images[0])
            setImageIndex(0)
        }
    }

    const clickLeft = () => {
        index--
        setImageValue(images[index])
        setImageIndex(index--)
        if (index === 0) {
            setImageValue(images[4])
            setImageIndex(4)
        }
    }


    return (
        <div>
            <img src={imageValue} />
            <button onClick={clickLeft}>Left</button>
            <button onClick={clickRight}>Right</button>
        </div>
    )

}

export default Carousel