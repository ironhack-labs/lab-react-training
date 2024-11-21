import { useState } from "react"
const LikeButton = () => {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [like, setLike] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const handleClick = () => {
        setLike(like + 1)
        setColorIndex((colorIndex +1 ) % colors.length)
    }

    return (
        <button onClick = {handleClick}
        style = {{ background: colors[colorIndex], color: 'white'}}
        >
            {like} Likes
        </button>
    )
}


export default LikeButton