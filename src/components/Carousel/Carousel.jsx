import { useState } from "react"

const Carousel = ({ images }) => {
    const [currentPic, setCurrentPic] = useState(0)
    const prevPicture = () => {
        currentPic === 0 ? setCurrentPic(images.length - 1) : setCurrentPic(currentPic - 1)
    }
    const nextPicture = () => {
        setCurrentPic((currentPic + 1) % images.length)
    }

    return (
        <div><img src={images[currentPic]} alt="carousel" />
            <div>
                <button onClick={prevPicture}>PREV</button>
                <button onClick={nextPicture}>NEXT</button>
            </div>
        </div>
    )
}
export default Carousel