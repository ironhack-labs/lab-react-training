import { useState } from 'react'

/* el promp que recibe la constante son las imágenes que nos dan, como se va a "desplazar" por ellas el usuario con los botones, necesitamos
de la propiedad length, por eso "se llaman" en la función*/

const Carousel = ({ images }) => {
    const [actualImage, setActualImage] = useState(0)

    const handleNextPicture = () => {
        setActualImage((previousImage) =>
            /*si el valor anterior es igual a la longitud de images - 1, se establece actualImage en 0, de lo contrario, se incrementa en 1. */
            previousImage === images.lenght - 1 ? 0 : previousImage + 1)
    }

    const handlePrevousPicture = () => {
        setActualImage((previousImage) =>
            /*Si el valor anterior es igual a la longitud de images - 1, se establece actualImage en 0, de lo contrario, se diminuye en 1. */
            previousImage === images.lenght - 1 ? 0 : previousImage - 1)
    }

    return (
        <div>
            <button onClick={handlePrevousPicture}>Left</button>
            <img src={images[actualImage]} alt="" />
            <button onClick={handleNextPicture}>Right</button>
        </div>
    )
}

export default Carousel;



























