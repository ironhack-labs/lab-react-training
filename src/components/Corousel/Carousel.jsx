import { useState } from "react"

function Carousel({ images }) {
    let number = 0

    const [imgValue, setImgValue] = useState(images[0])
    const [CountValue, setCountValue] = useState(number)

    const RightImage = () => {
        setCountValue(CountValue >= (images.length - 1) ? 0 : CountValue + 1)
    }

    const LeftImage = () => {
        setCountValue(CountValue <= 0 ? (images.length - 1) : CountValue - 1)
    }


    const changeImageRight = () => {
        RightImage()
        console.log(images.length)
        setImgValue(images[CountValue])
    }

    const changeImageLeft = () => {
        LeftImage()
        setImgValue(images[CountValue])
    }


    return (
        <>
            <img src={imgValue} alt="image" />
            <button onClick={changeImageLeft}>Left</button>
            <button onClick={changeImageRight}>Right</button>
        </>
    )
}

export default Carousel