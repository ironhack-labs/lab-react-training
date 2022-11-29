import './Carousel.css'
import { useState } from 'react'

const Carousel = ({images}) => {
    
    const [firstImage, setImage]= useState(0)

    const handleLeftImage = () => {
        firstImage === 0 ? setImage(images.length - 1) : setImage(firstImage - 1)
    }

    const handleRightImage = () => {
       setImage((firstImage+1) % images.length)
    }

    return (
        <div className='Carousel'>
            <div className="row">
                    <img src={images[firstImage]} alt="carousel img" />
                <div className="col">
                    <button onClick={handleLeftImage}>Left</button>
                    <button onClick={handleRightImage}>Right</button>
                </div>
            </div>
         </div>
    )
}

export default Carousel


