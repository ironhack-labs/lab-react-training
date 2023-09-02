import { useState } from "react"
import "../styles/Carousel.css"

function Carousel(props) {
    const [imageIndex, setImageIndex] = useState(0)
    return (
        <div className="Carousel">
            <button onClick={() => setImageIndex(imageIndex-1<0 ? props.images.length-1 : imageIndex-1)}>Left</button>
            <img src={props.images[imageIndex]} alt='carousel pics' />
            <button onClick={() => setImageIndex(imageIndex+1>props.images.length-1 ? 0 : imageIndex+1)}>Right</button>
        </div>
    )
}

export default Carousel