import { useState } from 'react'

function Carousel({ images }) {
    const [showCarousel, setshowCarousel] = useState(images[0])

    const toggleImg = () => setshowCarousel(!showCarousel)

    const leftMove = () => (++images[0])

    const rightMove = () => (--images[0])

    return (
        <div>
            <button onClick={leftMove}>LEFT</button>
            <img src={showCarousel}></img>
            <button onClick={rightMove}>RIGHT</button>
        </div>
    )
}

export default Carousel;