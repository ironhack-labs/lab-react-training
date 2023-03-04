import { useState } from 'react';

function Carousel({ images }) {
    const [picture, setPicture] = useState(0)

    console.log(picture)
    console.log(images[0])

    const clickRight = () => {
        const increase = picture + 1
        increase >= 4 ? setPicture(3) : setPicture(increase)
    }

    const clickLeft = () => {
        const decrease = picture - 1
        decrease <= 0 ? setPicture(0) : setPicture(decrease)
    }

    return (
        <div>
            <button style={{ width: "100px" }} onClick={clickLeft}>Left</button>
            <img src={images[picture]} style={{ width: "200px" }} alt="carousel" />
            <button style={{ width: "100px" }} onClick={clickRight}>Right</button>

        </div>
    )
}

export default Carousel;