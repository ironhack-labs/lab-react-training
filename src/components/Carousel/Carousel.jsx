import { useState } from "react";
import "./Carousel.css"
const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <img src={images[index]}/>
            <div>
                <button onClick={() => setIndex(index === 0 ? images.length -1 : index - 1)}>
                    Left 
                </button>
                <button onClick={() => setIndex((index + 1) % images.length)}>
                    Right
                </button>
            </div>
        </div>
    );
};

export default Carousel;