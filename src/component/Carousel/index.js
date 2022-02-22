import { useEffect, useState } from "react";
import './styleCarousel.css'

const Carousel = (props) => {
    const { images } = props;
    const [ position, setPosition ] = useState(0);
    const [ img, setImg ] = useState(images[position]);
    const handlePosition = (change) => {
        change === 'right'
        ? setPosition((prevPosition) => (prevPosition + 1) %5)
        : setPosition((prevPosition) => (prevPosition +1) %5)
    };

    useEffect(() => {
        setImg(images[position])
    }, [position])
    return (
        <div className="Carousel">
        <button onClick={() => {handlePosition('left')}}>Left</button>
        <img src={img} alt="icon-carousel"/>
        <button onClick={() => {handlePosition('right')}}>Right</button>
        </div>
    )
};

export default Carousel;