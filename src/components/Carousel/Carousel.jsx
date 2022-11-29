import { useState } from "react"


const Carousel = (props) => {

    const { images } = props

    const [positionlValue, setPositionValue] = useState(0)
    
    const incrementPosition = () => {

        setPositionValue(positionlValue + 1)
    }
    const decrementPosition = () => {
        setPositionValue(positionlValue - 1)
    }
    return (
        <article >
            <button onClick={incrementPosition}>Left</button>
            <img src={images[positionlValue]}></img>
            <button onClick={decrementPosition}>Right</button>
        </article>
    )
}
export default Carousel