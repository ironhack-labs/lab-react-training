import './Carousel.css'
import { useState } from 'react'

function Carousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0)



    return (<>
        <img src={images[imageIndex]}></img>
        <button onClick={() => setImageIndex(prevIndex => (prevIndex === 0) ? prevIndex = 3 : --prevIndex)}>IZQ</button>
        <button onClick={() => setImageIndex(prevIndex => (prevIndex === 3) ? prevIndex = 0 : ++prevIndex)}>DCHA</button>

    </>)
}

export default Carousel