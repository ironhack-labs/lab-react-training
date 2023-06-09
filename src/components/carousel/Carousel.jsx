import { useState } from 'react';

function Carousel({ images }) {
    const [index, setIndex] = useState(0)

    function clickLeft(sum) {
        if (sum < 0 && index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index + sum)
        }
    }

    function clickRight(sum) {
        if (sum > 0 && index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + sum)
        }

    }

    return (
        <div>
            <button onClick={() => clickLeft(-1)}>Left</button>
            <img src={images[index]} alt='img' />
            <button onClick={() => clickRight(1)}>Right</button>
        </div>
    )

}

export default Carousel