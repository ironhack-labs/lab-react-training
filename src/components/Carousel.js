import './Carousel.css';
import React, { useState } from 'react';

function Carousel({ images }) {
    const [carousel, setCarousel] = useState(images[0])
    let indiceCarousel = images.indexOf(carousel)
    const buttonLeft = () => (indiceCarousel = 0) ? setCarousel(indiceCarousel - 1) : setCarousel(images.length - 1)//algo esta saliendo mal aqui, porque solo se inicia en esta pero no varia los index
    const buttonRight = () => (indiceCarousel = 0) ? setCarousel(indiceCarousel + 1) : setCarousel(images.length + 1)
    return (
        <>
            <img src={carousel} alt="Imagen del carrusel" />
            <br></br>
            <button onClick={buttonLeft}>Left</button>
            <button onClick={buttonRight}>Right</button>
        </>
    )
}
export default Carousel