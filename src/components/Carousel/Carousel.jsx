import { useState } from "react"

const Carousel = ({ images }) => {

    const [imgRender, imgShow] = useState(0)

    const leftImage = () => imgShow(imgRender - 1)
    const rigthImage = () => imgShow(imgRender + 1)

    return (
        <>
            <button onClick={leftImage}>Left</button>
            <img src={images[imgRender]} alt="Image" />
            <button onClick={rigthImage}>Rigth</button>

        </>
    )

}

export default Carousel