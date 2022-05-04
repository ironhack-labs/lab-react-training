import { useState } from 'react'
import './Carousel.css'


function Carousel({ images }) {

    const [imageValue, setImageValue] = useState(0)

    return (

        <div >
            <h1>Carousel</h1>
            <div className='button-carousel'>
                <button onClick={() => setImageValue(prevImageVal => prevImageVal > 0 ? --prevImageVal : prevImageVal = 3)}>Previous</button>
                <img src={images[imageValue]} alt="default"></img>
                <button className='button-carousel' onClick={() => setImageValue(prevImageVal => prevImageVal < 3 ? ++prevImageVal : prevImageVal = 0)}>Next</button>
            </div>
        </div>
    )
}

export default Carousel