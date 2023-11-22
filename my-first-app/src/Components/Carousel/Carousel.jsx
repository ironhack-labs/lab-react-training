import { useState } from "react"


let num = 0

const Carousel = ({ images }) => {


    const [image, setImage] = useState(images[num])

    const oneImgE = () => {

        num = num + 1
        const newimg = images[num]
        setImage(newimg)

        if (num >= images.length - 1) {
            num = 0
        }
    }


    const oneImg = () => {

        num = num - 1
        const newimg = images[num]
        setImage(newimg)
        if (num <= 0) {
            num = images.length - 1
        }

    }

    return (
        <>
            <button onClick={oneImg}> left </button>
            <img src={image} alt="holi" />
            <button onClick={oneImgE}> right </button>
        </>

    )
}

export default Carousel