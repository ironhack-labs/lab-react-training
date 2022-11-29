import { useState } from "react";
import "./../LikeButton/LikeButton.css"

const LikeButton = () => {
    const [LikeButtonValue, setLikeButtonValue] = useState(0)

    const sumLikeButton = () => {
        setLikeButtonValue(LikeButtonValue + 1)
        // console.log(LikeButtonValue)
    }

    return (

        <button onClick={sumLikeButton} className='LikeButton'>{LikeButtonValue} Likes</button>

    )
}

export default LikeButton