import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [likeCounter, setLikeCounter] = useState(0)

    const incrementLikes = () => setLikeCounter(likeCounter + 1)


    const bgColorStyle = {
        backgroundColor: likeCounter < colors.length ? colors[likeCounter] : colors[0]
    }

    return (
        <div className="LikeButton">
            <button onClick={incrementLikes} style={bgColorStyle}>{likeCounter} {likeCounter > 0 ? 'Likes' : 'Like'}</button>
        </div>
    )

}

export default LikeButton