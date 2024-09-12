import { useState } from 'react';

const Carousel = ({ images }) => {

    const [imgIndex, setImgIndex] = useState(0)

    const handleLeft = () => {

        setImgIndex((imgIndex) => imgIndex === 0 ? images.length - 1 : imgIndex - 1)

        // setImgIndex((imgIndex) => {
        //     if (imgIndex === 0) {
        //         return images.length - 1
        //     } else {
        //         return imgIndex - 1
        //     }
        // })
    }
    const handleRight = () => {

        setImgIndex((imgIndex) => imgIndex === images.length - 1 ? 0 : imgIndex + 1)

        // setImgIndex((imgIndex) => {
        //     if (imgIndex === images.length - 1) {
        //         return 0
        //     } else {
        //         return imgIndex + 1
        //     }
        // })

    }

    return (
        <section className="Carousel">
            <button onClick={handleLeft}>LEFT</button>
            <img src={images[imgIndex]} alt="" />
            <button onClick={handleRight}>RIGHT</button>
        </section>
    )
}

export default Carousel