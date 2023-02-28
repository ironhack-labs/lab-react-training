import { useState } from "react"
import './LikeButton.css'

const LikeButton = () => {

    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [liked, setLiked] = useState(0)
    const [indexColor, setIndexColor] = useState(0)

    const incrementLikes = () => {
        setLiked(liked + 1)

        setIndexColor(indexColor + 1)
        indexColor == color.length - 1 && setIndexColor(0)
    }

    const style = {
        backgroundColor: color[indexColor]
    }

    return (
        <div className='LikeButton' style={style} onClick={incrementLikes}>
            <p > {liked} likes</p>
        </div>
    )
}

export default LikeButton