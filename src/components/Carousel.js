import React, { useState } from 'react';

function Carousel(props) {

    const [index, setIndex] = useState(0)

    const leftImage = () => {

        setIndex(prevIndex => {
            if (prevIndex > 0) {
                return prevIndex - 1
            } else {
                return props.images.length - 1
            }
        })
    }

    const rightImage = () => {

        setIndex(prevIndex => {

            if (prevIndex < props.images.length - 1) {
                return prevIndex + 1
            } else {
                return 0
            }
        })
    }

    return (
        <div>
            <button onClick={leftImage}>Left</button>
            <img src={props.images[index]} />
            <button onClick={rightImage}>Right</button>
        </div>
    )
}

export default Carousel;