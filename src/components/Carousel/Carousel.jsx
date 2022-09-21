import './Carousel.css'
import { useState } from 'react';


const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0);
    const updateIndex = (signo) => {

        const newIndex = index + signo;
        newIndex < 0 ? setIndex(3)
            : newIndex > 3 ? setIndex(0)
                : setIndex(newIndex)
    };
    return (
        <div>
            <button onClick={() => updateIndex(-1)}>Left</button>
            <img src={images[index]} alt="image1" />
            <button onClick={() => updateIndex(1)}>Right</button>
        </div>
    )
}
export default Carousel