import { useState } from "react"


function Carousel({ images }) {
    const [image, setImage] = useState(0);
    const rotateLeft = () => {
        if (image > 0) {
            setImage(image - 1)
        }
    }
    const rotateRight = () => {
        if (image < (images.length - 1)) {
            setImage(image + 1)
        }
    }

    return (
        <div>
            <img src={images[image]} />
            <button onClick={rotateLeft}>left</button>
            <button onClick={rotateRight}>right</button>
        </div>
    )
}

export default Carousel
