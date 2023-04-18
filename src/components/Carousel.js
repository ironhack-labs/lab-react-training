import { useState } from "react"

function Carousel(props) {

const {images} = props

const [currentIndex, setCurrentIndex] = useState(0)

const frontClick = () => {
    setCurrentIndex((currentIndex + 1 ) % images.length)
}

const backClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
}

return (
    <div>

        <button onClick={backClick}>Back</button>
        <img src={images[currentIndex]} />
        <button onClick={frontClick}>Front</button>
    </div>
)

}

export default Carousel