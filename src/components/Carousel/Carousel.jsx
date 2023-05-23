import './Carousel.css'
import { useState } from "react"

const Carousel = ({ images }) => {

    const [picNumber, setPicNumber] = useState(0)
    const [photo, setPhoto] = useState(images[picNumber])

    const previousPicture = () => {
        setPicNumber(picNumber - 1)
        if (picNumber === 0) setPicNumber(images.length - 1)
        setPhoto(images[picNumber])
    }
    const nextPicture = () => {
        setPicNumber(picNumber + 1)
        if (picNumber === images.length - 1) setPicNumber(0)
        setPhoto(images[picNumber])
    }
    console.log(picNumber)

    return (
        <div className="carousel">
            <button onClick={previousPicture}>Previous</button>
            <img src={photo} alt="person" />
            <button onClick={nextPicture}>Next</button>
        </div>
    );
}






export default Carousel