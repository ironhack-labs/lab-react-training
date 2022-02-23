import { useState } from "react"
import './Carousel.css'


const Carousel = ({ images }) => {

    let [imageIdx, setImageIdx] = useState(0)

    return (
        <>
            <img src={images[imageIdx]} alt="imagen" />

            <button onClick={() =>
                imageIdx++ === 3 ? setImageIdx(imageIdx = 0) : setImageIdx(imageIdx++)

            }> Right </button >

            <button onClick={() =>
                imageIdx-- === 0 ? setImageIdx(imageIdx = 3) : setImageIdx(imageIdx--)

            }> Left </button >
        </>

    )

}


export default Carousel