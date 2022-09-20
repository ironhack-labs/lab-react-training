import { useState } from 'react';

const Carousel = (props) => {
    const [myImage, setMyImage] = useState(2) //Estado inicial de la imagen, osea, la de Index 3

    const updateImage = (numero) => {
        const newImage = myImage + numero; //NewImage es ahora myImage + el número del index, 2 + 2 p ej si useState es 2
        if (newImage === 4) {
            setMyImage(0) //Si new Image llega al index 4, como no hay imagen, lo ponemos en 0
        } else if (newImage === -1) {
            setMyImage(3) //Si new Image llega al index Negativo, como no hay imagen, lo ponemos en la siguiente(Pensar si estoy en Left o Right)
        } else {
            setMyImage(newImage) //Sino, renderizamos la imagen con los Index que si existen
        }
    }

    return (
        <div className="carousel">
            <button onClick={() => updateImage(-1)}>Left</button>
            <img src={props.images[myImage]} alt="carouselImage" />
            <button onClick={() => updateImage(1)}>Right</button>
        </div>
    )
}

export default Carousel


