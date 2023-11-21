import { useState } from "react"

function LikeButton() {
    const [count, setCount] = useState(0)
    // const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    // const bg = {}



    function sumOne() {
        setCount(count + 1)
        // const random = Math.floor(Math.random() * (6))

    }



    return (
        <button className="butoni" onClick={sumOne}>{count}</button>
    )
}


export default LikeButton