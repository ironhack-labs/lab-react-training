import './Carousel.css'

import { useState } from 'react'

const Carousel = (props) => {

    const { images } = props

    let [imgSrc, setImgSrc] = useState(0)


    return (
        <div className='Carousel'>
            <button onClick={() => {
                imgSrc - 1 === -1 ? setImgSrc(imgSrc = 3) : setImgSrc(imgSrc -= 1)
            }}>Left</button>
            <img src={images[imgSrc]} alt=''></img>
            <button onClick={() => {
                imgSrc + 1 === 4 ? setImgSrc(imgSrc = 0) : setImgSrc(imgSrc += 1)
            }}>Right</button>

        </div>
    )
}

export default Carousel