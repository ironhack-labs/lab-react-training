import { useState } from "react"

const LikeButton = () => {

    const [likeValue, setLikeValue] = useState(0)

    const incrementCounterLikes = () => setLikeValue(likeValue + 1)

    const backgroundColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const buttonStyle = {
        backgroundColor: backgroundColors[likeValue % backgroundColors.length]
    }

    return (
        <button onClick={incrementCounterLikes} style={buttonStyle}>{likeValue} likes</button>
    )
}

export default LikeButton