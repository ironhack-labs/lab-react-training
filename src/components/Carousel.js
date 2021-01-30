import React, { useState } from 'react';

export default function Carousel ({imgs}) {

    const [img, setImg] = useState(0);

    function moveCarousel(direction) {
        let pos = img + direction;

        if (pos > 3) {
            pos = 0
        } else if (pos < 0) {
            pos = 3
        }

        setImg(pos);
    }

    return (
        <div className='carouselCont'>
            <button onClick={
                (e) => {
                    moveCarousel(-1)
                }
            }>
                Left
            </button>
            <img src={imgs[img]}/>
            <button onClick={
                (e) => {
                    moveCarousel(1)
                }
            }>
                Right
            </button>
        </div>
    )
}