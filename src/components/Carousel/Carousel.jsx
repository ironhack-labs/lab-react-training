import { useState } from 'react'


const Carousel = ({images}) => {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const imageToRight = () => {
        setCurrentImageIndex(currentImageIndex + 1)
       
    }

    const imageToLeft = () => {
        setCurrentImageIndex(currentImageIndex - 1)
        
    }


    return (
        <>
        <div className="carouselButtons">
            <button onClick={imageToLeft}> Left </button>
            <img src={images[currentImageIndex]} alt="" />
            <button onClick={imageToRight}> Right </button>
        </div>
        </>
    );

}

export default Carousel