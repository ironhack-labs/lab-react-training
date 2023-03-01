import './Carousel.css'
import { useState } from 'react'


const Carousel = (image) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselArray = ['https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg']


    const moveRight = () => {
        setCurrentIndex((currentIndex + 1))
        if (currentIndex === carouselArray.length - 1) {
            setCurrentIndex(0)
        }
    }
    const moveLeft = () => {
        setCurrentIndex((currentIndex - 1))
        if (currentIndex === 0) {
            setCurrentIndex(carouselArray.length - 1)
        }

    }
    return (
        <div>
            <button onClick={moveLeft}>Left</button>
            <img src={carouselArray[currentIndex]} alt="" />
            <button onClick={moveRight}>Right</button>
        </div>

    )


}

export default Carousel