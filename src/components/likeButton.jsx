import { useState } from "react"
import './likeButton.css'

const LikeButton = () => {

    const [likeValue, setlikeValue] = useState(0)


    const incrementLike = () => {
        setlikeValue(likeValue + 1)
    }





    return (
        <div className="Counter">




            <button onClick={incrementLike}> {likeValue} likes </button>
        </div>
    )
}


export default LikeButton