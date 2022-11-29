import { useState } from 'react'


const Carousel = ({images}) => {

    const [index, setIndex] = useState(0)

    const incrementIndex = () => {
        index >= images.length-1 ? setIndex(0) : setIndex(index + 1)
    }

    const decrementIndex = () => {
        index <= 0 ? setIndex(images.length-1) : setIndex(index - 1)
    }


    return (

        <>
            <button onClick={decrementIndex}>Left</button>
            <img src={images[index]} alt="picture" />
            <button onClick={incrementIndex}>Right</button>
        </>

    )
}

export default Carousel