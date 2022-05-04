import { useState } from 'react'
import "../styles/Carousel.css"

const Carousel = ({ images }) => {

    const [currentImage, setImage] = useState(0)
    const move = (direction) => {
        return (currentImage + direction + 4) % 4
    }


    return (
        <div>
            <button onClick={() => setImage(move(1))}>Next</button>
            <img className='catsImg' src={images[currentImage]} alt="Imagenes raras" />
            <button onClick={() => setImage(move(-1))}>Prev</button>
        </div>
    )

}


export default Carousel