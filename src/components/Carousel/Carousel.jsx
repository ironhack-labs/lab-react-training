import { useState } from "react";

const Carousel = ({ images }) => {

    let randomImage = Math.floor(Math.random() * images.length)


    const [currentImage, setImage] = useState(images[randomImage])

    const goBack = () => {
        const currentImageIndex = images.indexOf(currentImage)
        currentImageIndex === 0 ? setImage(images[images.length - 1]) : setImage(images[currentImageIndex - 1])
    }

    const goForward = () => {
        const currentImageIndex = images.indexOf(currentImage)
        currentImageIndex === images.length - 1 ? setImage(images[0]) : setImage(images[currentImageIndex + 1])
    }
    return (
        <div><button onClick={goBack}>-</button><img src={currentImage} alt="image of random person" /><button onClick={goForward}>+</button></div>
    )

}
export default Carousel