import { useState } from "react";


const Carousel = ({ images }) => {
    const [image, setImage] = useState(0)

    const rotateright = () => {
        if (image == images.length - 1) {
            return setImage(0)
        } else {
            return setImage(image + 1)
        }

    }
    const rotateleft = () => {
        if (image > 0) {
            return setImage(image - 1)





        }
    }
    return (
        <>
            <img src={images[image]} alt="" />
            <button onClick={rotateleft}>Left</button>
            <button onClick={rotateright}>Right</button>
        </>



    )
}
export default Carousel



