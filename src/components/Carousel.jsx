import { useState } from "react"

/* eslint-disable react/prop-types */
function Carousel(props) {
    const { images } = props
    const [ index, setIndex ] = useState(0)

    function toggleImage(dir) {
        let newIndex
        if (dir == "right") {
            newIndex = index + 1 
            newIndex %= images.length
        }
        if (dir == "left") {
            newIndex = index - 1 
            if (newIndex == -1) newIndex = images.length - 1
        }
        setIndex(newIndex)
    }

    return (
        <div>
            <button onClick={() => toggleImage("left")}>Left</button>
            <img src={images[index]} width="200px"></img>
            <button onClick={() => toggleImage("right")}>Right</button>
        </div>
    )
}

export default Carousel