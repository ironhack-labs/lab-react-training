import { useState } from "react"


const Carousel = (props) => {

    const { images } = props

    const { index, setIndex } = useState(1)
    const [showImage, setshowImage] = useState(images[1])

    const toggleCarousel = (direction) => {
        let index = showImage

        if (direction === 'Right') {
            index++
        }
        else if (direction === 'Left') {
            index--
        }
    }

    return (
        <div>

            <img style={{width: 200}} src={showImage}></img>
            <button onClick={() => setshowImage((imageLeft) => imageLeft.indexOf({showImage}) -1) }>left</button>
            <button onClick={() => setshowImage((imageRight) => imageRight.indexOf({showImage}) + 1)}>Right</button>
        </div>

    )
}

export default Carousel