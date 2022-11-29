import { useState } from "react";
import './LikeButton.css'


const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const addLike = () => {

        setLikes(likes + 1)
    }



    return (
        <>
            <button className="button" onClick={addLike}>{likes}Like</button>
        </>

    )
}

export default LikeButton 