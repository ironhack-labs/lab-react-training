import { useEffect, useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {


    const [n, setN] = useState(0)
    const [imagesCarousel, setImagesCarousel] = useState(images[n])

    const nextImage = () => {
        if (n < images.length - 1) {
            setN(n + 1)
            setImagesCarousel(images[n])
        } else {
            setN(0)
            setImagesCarousel(images[n])
        }

    }

    const previousImage = () => {
        if (n > 0) {
            setN(n - 1)
            setImagesCarousel(images[n])
        } else {
            setN(images.length - 1)
            setImagesCarousel(images[n])
        }
    }
    console.log(imagesCarousel)

    return (
        <>
            <img src={imagesCarousel} alt="images" />
            <div>
                <button className='CarouselButton' onClick={previousImage}>Previous</button>
                <button className='CarouselButton' onClick={nextImage}>Next</button>
            </div>
        </>
    )
}

export default Carousel