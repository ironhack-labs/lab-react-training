import React, { useState } from "react";

const Carousel = ({ images }) => {
    const [showImg, setImg] = useState(0);

    const leftClick = () => {
        if (showImg !== 0) {
            setImg(showImg - 1);
        } else {
            setImg(3);
        }
    };

    const rightClick = () => {
        if (showImg !== 3) {
            setImg(showImg + 1);
        } else {
            setImg(0);
        };
    };

    return (
        <div>
            <button onClick={leftClick}>Left</button>
            <img src={images[showImg]} alt="images" />
            <button onClick={rightClick}>Right</button>
        </div>
    );
};

export default Carousel;