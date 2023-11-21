import { useState } from "react"

const Carousel = ({ images }) => {

    let random = Math.floor(Math.random() * images.length)

    const [photo, setPhoto] = useState(images[random])

    let position = ""

    const handleLeft = () => {
        position = images.indexOf(photo)
        if (position > 0) {
            setPhoto(images[position - 1])
        } else {
            setPhoto(images[images.length - 1])
        }
    }

    const handleRight = () => {
        position = images.indexOf(photo)
        if (position < images.length - 1) {
            setPhoto(images[position + 1])
        } else {
            setPhoto(images[0])
        }
    }

    return (
        <div>
            <img src={photo} alt="photos" />
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </div>

    )
}

export default Carousel