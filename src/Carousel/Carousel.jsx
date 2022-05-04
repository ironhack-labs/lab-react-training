import { useState } from 'react'

const Carousel = ({ images }) => {


    const [indexValue, setIndexValue] = useState(0)
    const rightPicture = () => {

        setIndexValue(prevIndex => prevIndex > 0 ? --prevIndex : prevIndex = 3)
        console.log(indexValue)
    }

    const leftPicture = () => {

        setIndexValue(prevIndex => prevIndex < 3 ? ++prevIndex : prevIndex = 0)
    }

    return (

        <div className='carousell'>
            <button onClick={leftPicture} >Left</button>
            <img src={images[indexValue]} alt='images' />
            <button onClick={rightPicture} >Right</button>
        </div>
    )
}

export default Carousel