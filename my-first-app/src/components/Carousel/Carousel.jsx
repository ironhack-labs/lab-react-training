
import { useState } from "react"

let num = 0

const Carousel = ({ images }) => {


    const [image, setImage] = useState(images[num])

    const incrementCarousel = () => {
        num = num + 1
        const newImag = images[num]
        setImage(newImag)

        if (num >= images.length - 1) {
            num = 0
        }
    }

    const decrementCarousel = () => {
        num = num - 1
        const newImag = images[num]
        setImage(newImag)

        if (num <= 0) {
            num = images.length - 1
        }


    }

    return (
        <>
            <div className="Carousel">


                <button onClick={incrementCarousel}> Rigth </button>
                <img src={image} />
                <button onClick={decrementCarousel}> Left </button>
            </div>

        </>
    )


}

export default Carousel