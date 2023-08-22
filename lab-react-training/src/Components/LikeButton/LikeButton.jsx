import { useState } from "react";
import './LikeButton.css'

const LikeButton = () => {
    const [countLike, setCountLike] = useState(0);
    const handleLike = () => {
        setCountLike(countLike + 1)
    }
    const [countLikeOther, setCountLikeOther] = useState(0);
    const handleLikeOther = () => {
        setCountLikeOther(countLikeOther + 1)
    }
    return (
        <>
            <button onClick={handleLike}> {countLike} Likes</button>
            <button onClick={handleLikeOther}>{countLikeOther} Likes</button>
        </>

    )
}

export default LikeButton