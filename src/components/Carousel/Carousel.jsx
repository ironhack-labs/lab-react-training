import { useState } from 'react';

const Carousel = (props) => {


    const [index, setIndex] = useState(0)

    const updateIndex = (valor) => {
        const newIndex = index + valor
        if (newIndex < 0) {
            setIndex(3)
        } else if (newIndex > 3) {
            setIndex(0)
        } else {
            setIndex(newIndex)
        }

    }
    return (
        <div>
            <button onClick={() => updateIndex(-1)}>Left</button>
            <img src={props.images[index]} alt="image1" />
            <button onClick={() => updateIndex(1)}>Right</button>
        </div>
    )
}
export default Carousel;





















