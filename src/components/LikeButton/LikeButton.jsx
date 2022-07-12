import './LikeButton.css'
import { useState } from "react"

const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const incrementValue = () => setCounterValue(counterValue + 1)
    const styleColor = {
        backgroundColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    }
    const newStyleColor = ` backgroundColor: '${styleColor.backgroundColor[3]}'`
    console.log(newStyleColor)

    const style = { backgroundColor: 'red' }



    return (
        <>
            <button onClick={incrementValue} style={style}> Likes  {counterValue}</button>
        </>
    )
}


export default LikeButton