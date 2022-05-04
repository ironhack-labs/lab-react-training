import { useState } from "react"
const Carousel = ({ images }) => {

    const [counter, setCounter] = useState(0)

    function counterLimit(counter) {
        if (counter < 0) {
            return counter = 3
        }
        else if (counter > 3) {
            return counter = 0

        }
    }
    return (
        <div>
            <button onClick={() => setCounter(prevCounterVal => prevCounterVal < 3 ? ++prevCounterVal : prevCounterVal = 0)}>Move to Right</button>
            <button onClick={() => setCounter(prevCounterVal => prevCounterVal > 0 ? --prevCounterVal : prevCounterVal = 3)}>Move to Left</button>


            <img src={images[counter]} alt='People' />
        </div >

    )
}


export default Carousel

