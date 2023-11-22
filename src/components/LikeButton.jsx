import { useState } from "react"

function LikeButton() {
    const [count, setCount] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [style, setStyle] = useState({ backgroundColor: "white" })





    function sumOne() {
        setCount(count + 1)
        const random = Math.floor(Math.random() * (6))
        setStyle({ backgroundColor: colors[random] })
        console.log(style, "-------------------------------")
    }



    return (
        <button className="butoni" style={style} onClick={sumOne}>{count}</button>
    )
}


export default LikeButton