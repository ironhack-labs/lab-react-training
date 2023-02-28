
import { useState } from 'react'
import './../Carousel/Carousel.css'

const Carousel = ({ images }) => {



    const [counterImg, setCounterImg] = useState(0)



    const leftClick = () => {
        setCounterImg((counterImg - 1 + images.length) % images.length)
    }

    const rigthClick = () => {
        setCounterImg((counterImg + 1) % images.length)
    }



    return (
        <div>
            <button className='buttonCarusel' onClick={leftClick}> Left  </button>
            <img className='carousel' src={images[counterImg]} alt="img" />
            <button className='buttonCarusel' onClick={rigthClick}> Rigth </button>
        </div>

    )
}

export default Carousel