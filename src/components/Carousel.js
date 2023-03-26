import React, { useState } from 'react'

function Carousel({ images }) {
    const [image, setImage] = useState(0)

    function leftImage() {
        setImage((prev) => (prev - images.length - 1) % images.length)
    }

    function rightImage() {
        setImage((prev) => (prev +1) % images.length)
    }


    return (
        <div className='containerPhotos'>
            <button className='carouselLeft' onClick={leftImage}>Left</button>
            <img src={images[Math.abs(image)]} alt='photo' />
            <button className='carouselRight' onClick={rightImage}>Right</button>

        </div>
    )
}

export default Carousel
