import { useState } from "react";

function Carousel ({images}) {

    console.log(images.length)

    const [imageIndex, setImageIndex] = useState(0);

    const handleNext = () => {
        setImageIndex(imageIndex < images.length - 1 ? imageIndex  + 1 : 0 )
    }

    const handlePrevious = () => {
        setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1)

    }

    return (
        <div>
            <img style={{width: '200px'}} src={images[imageIndex]} alt="Random" />
            <div className="">
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePrevious}>Previous</button>
            </div>
            
        </div>

    )
}

export default Carousel;