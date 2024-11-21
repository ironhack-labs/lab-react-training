import { useState } from 'react'

const Carousel = (props) => {

    const { images } = props;

    const [clicked, setClicked] = useState(0)

    const left = () => {
        setClicked((clicked + 1) % images.length)
    }
    const rigth = () => {
        setClicked((clicked - 1 + images.length) % images.length)
    }

    return (
        <div>
            <button onClick={left}>Left</button>
            <img src={images[clicked]} />
            <button onClick={rigth}>Rigth</button>
        </div>
    )
}
export default Carousel;