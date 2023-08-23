import { useState } from 'react'

const LikeButton = () => {

    const [likeValue, setLike] = useState(0)

    const incrementValue = () => {
        setLike(likeValue + 1)
    }
    return (
        <div className="likeButton">
            <button onClick={incrementValue}> {likeValue} likes</button>
        </div>
    )
}

export default LikeButton




