import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likeValue, setLikeValue] = useState(0)
    const [likeValue2, setLikeValue2] = useState(0)

    const incrementLikeValue = () => {
        setLikeValue(likeValue + 1)
    }

    const incrementLikeValue2 = () => {
        setLikeValue2(likeValue2 + 1)
    }


    return (
        <div className="Like">

            <button onClick={incrementLikeValue}> Likes {likeValue} </button>
            <button onClick={incrementLikeValue2}> Likes {likeValue2} </button>
        </div>
    )
}
export default LikeButton