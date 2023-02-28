import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
    const [count, setCount] = useState(0)

    const changeImg = (direcction) => {
        if (count === images.length - 1) return setCount(0)
        else if (direcction === 'right') return setCount(count + 1)
        else if (direcction === 'left' && count === 0) return setCount(images.length - 1)
        else return setCount(count - 1)
    }
    return (

        <div className="Carousel">
            <button onClick={() => changeImg('left')}>&lt;</button>
            <figure className="Carousel" >
                <img src={images[count]} alt="" />
            </figure>
            <button onClick={() => changeImg('right')}>&gt;</button>
        </div>


    );
}

export default Carousel;
