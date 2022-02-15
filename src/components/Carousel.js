import React, { useState } from 'react';

function Carousel(props) {

    const [index, setIndex] = useState(0)

    const prevImage = () => {

        setIndex(prevState => {
            if (prevState > 0) {
                console.log(prevState)
                return prevState -1
            } else {
                return props.images.length-1
            }
        })
    }

    const nextImage = () => {

        setIndex(prevState => {

            if (prevState < props.images.length-1 ) {
                console.log(prevState)
                return prevState + 1
            } else {
                return 0
            }
        })
    }

    return(
        <div>
            <button onClick={prevImage}>Left</button>
            <img src={props.images[index]} alt="" />
            <button onClick={nextImage}>Right</button>
        </div>
    )
}

export default Carousel;