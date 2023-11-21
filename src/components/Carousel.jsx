import { useState } from "react"

let position = 0
function Carousel({ images }) {
    const [image, setImage] = useState(images[position])


    const LeftClick = () => {
        if (position > 0) {
            position--
            setImage(images[position])
        }
        else {
            position = images.length - 1
            setImage(images[position])
        }
    }

    const RigthClick = () => {

        if (position < images.length - 1) {
            position++
            setImage(images[position])
        }
        else {
            position = 0
            setImage(images[position])
        }

    }


    return (
        <div>
            <button onClick={LeftClick}>Left</button>
            <img src={image} alt="" />
            <button onClick={RigthClick}>Rigth</button>
        </div>
    )
}

export default Carousel