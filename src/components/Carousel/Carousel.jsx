import './Carousel.css'
import { useState } from 'react'

const Carousel = (props) => {
    const { images } = props
    const [imagenCarousel, setImagenCarousel] = useState(0)

    const buttonRigth = () => {
        setImagenCarousel(imagenCarousel + 1)
    }

    const buttonLeft = () => {
        setImagenCarousel(imagenCarousel - 1)
    }

    return (
        <>
            <button onClick={buttonLeft}>Left</button>
            <img src={images[imagenCarousel]} alt="" />
            <button onClick={buttonRigth}>Rigth</button>
        </>
    )
}
export default Carousel