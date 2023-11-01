
import React, { useState } from 'react';

function Carousel(props) {
    const [index, setIndex] = useState(0);
    
    const handleClickLeft = () => {
        if (index === 0) {
            setIndex(props.images.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    
    const handleClickRight = () => {
        if (index === props.images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    
    return (
        <div className="carousel">
            <button onClick={handleClickLeft}>Left</button>
            <img src={props.images[index]} alt="carousel" />
            <button onClick={handleClickRight}>Right</button>
        </div>
    );
}

export default Carousel;