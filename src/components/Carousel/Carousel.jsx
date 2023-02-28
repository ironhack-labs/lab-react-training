import './Carousel.css'
import { useState } from "react"

const Carousel = ({ images }) => {

    const [picNumber, setPicNumber] = useState(0)
    const [picture, setPicture] = useState(images[picNumber])

    const nextPicture = () => {
        setPicNumber(picNumber + 1)
        if (picNumber === images.length - 1) setPicNumber(0)
        setPicture(images[picNumber])
    }
    const previousPicture = () => {
        setPicNumber(picNumber - 1)
        if (picNumber === 0) setPicNumber(images.length - 1)
        setPicture(images[picNumber])
    }
    console.log(picNumber)

    return (
        <div className="carousel">
            <button onClick={previousPicture}>Previous</button>
            <img src={picture} alt="person" />
            <button onClick={nextPicture}>Next</button>
        </div>
    );
}

export default Carousel