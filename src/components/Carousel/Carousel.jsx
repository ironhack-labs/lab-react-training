import { useState } from "react";

const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)

    const setIndexPrevius = () => {
        if (index === 0) {
            setIndex(0)
        } else {
            setIndex(index - 1)
        }
    }

    const setIndexNext = () => {
        if (index === images.length - 1) {
            setIndex(images.length - 1)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div className="Carousel">
            <button onClick={(setIndexPrevius)}>Previous</button>
            <img src={images[index]}
                className="CarouselImages"
                style={{ width: 100 }}
            />
            <button onClick={(setIndexNext)}>Next</button>
        </div>
    )
}

export default Carousel