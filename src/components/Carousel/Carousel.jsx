import { useState } from "react"

let position = 0
function Carousel({ images }) {
    const [image, setImage] = useState(images[position])

    
    const slideLeft = () => {
        if (position > 0) {
            position--
            setImage(images[position])
        }
        else {
            position = images.length - 1
            setImage(images[position])
        }
    }

    const slideRigth = () => {
        console.log(position)
        if (position < images.length - 1) {
            position++
            setImage(images[position])
        }
        else {
            position = 0
            setImage(images[position])
        }
        console.log(position)
    }

    return (
        <div>
            <button onClick={slideLeft}>{"<"}</button>
            <img src={image} alt="" />
            <button onClick={slideRigth}>{">"}</button>
        </div>
    )
}

export default Carousel