import { useState } from "react"
import "./Carousel.css"

const Carousel = ({ images }) => {

    const [carouselIdx, setCarouselIdx] = useState(0)

    return (
        <>
            <img src={images[carouselIdx]} alt="Carousel" className="carouselImg" />
            <button className="buttonPrev" onClick={() => {
                setCarouselIdx(newImage => newImage =
                    carouselIdx > 0 ? carouselIdx - 1 : newImage = 3
                )
            }}>
                {"<<"}
            </button>
            <button className="buttonNext" onClick={() => {
                setCarouselIdx(newImage => newImage =
                    carouselIdx < 3 ? carouselIdx + 1 : newImage = 0
                )
            }}>
                {">>"}
            </button>
        </>
    )
}
export default Carousel
