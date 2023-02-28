import { useState } from "react"

const Likebutton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [counter, setCounter] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)

    const addLike = () => {
        setCounter(counter + 1)
        setColorIndex((colorIndex + 1) % colors.length)
    }

    return <button className="like-button" onClick={addLike} style={{ backgroundColor: colors[colorIndex] }}>{counter} Likes</button>
}

export default Likebutton