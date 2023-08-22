import { useState } from "react"

const Carousel = ({ images }) => {

    const [image, setImage] = useState(images)
    const [counter, setCounter] = useState(0)

    const handleSubtractCounter = () => {
        if (counter === image.length) {
            setCounter(counter - image.length)
        } else { setCounter(counter - 1) }

    }

    const handleAddCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="container">
            <button onClick={handleSubtractCounter}>Left</button>
            <img src={image[counter]} alt="Image" />
            < button onClick={handleAddCounter} > Right</button >
        </div>)


}

export default Carousel