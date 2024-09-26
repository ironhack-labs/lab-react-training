import { useState } from "react";

const Carousel = ({ images }) => {

    const [pictures, setPictures] = useState(0)


    const prevImage = () => {
        if (pictures < images.length - 1) {
            setPictures(pictures - 1)
        }
    }
    const nextImg = () => {
        if (pictures < images.length - 1) {
            setPictures(pictures + 1)
        }
    }

    return (
        <>
            <button
                onClick={prevImage}
            >Prev</button>
            <img src={images[pictures]} alt="IMG" />
            <button
                onClick={nextImg}
            >Nxt</button>
        </>
    )
}

export default Carousel